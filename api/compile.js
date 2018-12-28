var express = require('express')
var router = express.Router()

var fs = require('fs');
var shell = require('shelljs')

router.post('/', function(req, res, next) {
  var filename = 'tmp/' + req.body.file

  fs.writeFileSync(filename, req.body.program)
  fs.writeFileSync('tmp/stdin', req.body.input)

  shell.exec('gcc ' + filename, {silent:true}, function(exit, output, error){
    if ( exit ){
      res.json(error)
    }

    shell.exec('./a.out < tmp/stdin', {silent:true}, function(exit, output, error){
      var result = {
        "exit": exit,
        "output": output,
        "error": error
      }
      res.json(result)

      fs.unlinkSync(filename)
      fs.unlinkSync('tmp/stdin')
    })
  })
})

module.exports = router
