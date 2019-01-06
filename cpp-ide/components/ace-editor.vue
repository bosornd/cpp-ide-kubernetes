<template>
  <div :id="id" :style="editor_style"></div>
</template>

<script>
  export default {
    // v-model은 prop으로 value를 받고, value가 변경되면 input event를 전송한다.
    props: ['id', 'editor_style', 'options', 'value'],
    mounted () {
      var editor = this.$ace.edit(this.id)
      // options in https://github.com/ajaxorg/ace/wiki/Configuring-Ace
      editor.setOptions(this.options)
      editor.setValue(this.value, -1)
      editor.on("change", this.updateData)
    },
    methods: {
      updateData(changed){
        var editor = this.$ace.edit(this.id)
        this.$emit('input', editor.getValue())
      }
    }
  }
</script>
