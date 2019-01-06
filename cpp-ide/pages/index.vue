<template>
  <v-container fluid grid-list-xl>
    <v-layout column>
      <v-flex xs12>
        <ace-editor
          :id="editor.id"
          :editor_style="editor.style"
          :options="editor.options"
          v-model="code"
        />
      </v-flex>
      <v-flex xs12>
        <v-layout>
          <v-flex xs6>
            <v-textarea v-model="stdin" label="stdin" outline color=gray fontSize=14 />
          </v-flex>
          <v-flex xs6>
              <v-textarea v-model="stdout" label="stdout" outline color=gray fontSize=14 readonly />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-btn fab top right color="pink" dark fixed @click="compile">
      <v-icon>input</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import AceEditor from '../components/ace-editor.vue'

  export default {
    data () {
      return {
        editor: {
          id: 'editor',
          style: 'height: 400px; width: 100%; border: solid 2px gray;',
          options: {
            theme: 'ace/theme/chrome',
            mode: 'ace/mode/c_cpp',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            printMargin: false,
            vScrollBarAlwaysVisible: true,
            scrollPastEnd: 1,
            fontSize: 14
          }
        },
        code:
`#include <stdio.h>

int main(int argc, char* argv[])
{
  printf("Hello World!\\n");

  return 0;
}
`,
        stdin: '',
        stdout: '',
      }
    },
    components: {
      'ace-editor': AceEditor
    },
    methods: {
      async compile(){
        await this.$axios.post('/api/compile', {
          file: 'noname.c',
          program: this.code,
          input: this.stdin
        })
        .then( res => {
          console.log(res)
          var result = res.data
          this.stdout = result.compiled ?
            ( result.output + '\n\nProgram exits with ' + result.exit ) :
            ( 'Compiler exits with ' + result.exit + '\n\n' + result.error )
        })
        .catch(err => {
          console.log(err)
          this.stdout = err
        })

      }
    }
  }
</script>
