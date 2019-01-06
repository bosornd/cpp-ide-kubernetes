// @ncviewer/ace-editor-module 에서 ace 변수의 injection이 되지 않아서,
// 직접 ace-builds를 사용해서 nuxt plugin으로 만듦.
// 마지막에 inject('ace', ace)를 추가함.    by drajin.cho@bosornd.com

import ace from 'ace-builds/src-min-noconflict/ace'
import 'ace-builds/src-min-noconflict/ext-searchbox'
import 'ace-builds/src-min-noconflict/ext-settings_menu'
import 'ace-builds/src-min-noconflict/ext-language_tools'
import 'ace-builds/src-min-noconflict/ext-themelist'

/*
import 'ace-builds/src-min-noconflict/mode-c_cpp'
import 'ace-builds/src-min-noconflict/mode-java'
import 'ace-builds/src-min-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/mode-json'
import 'ace-builds/src-min-noconflict/mode-python'
*/

import 'ace-builds/src-min-noconflict/theme-chrome'
import 'ace-builds/src-min-noconflict/theme-cobalt'
import 'ace-builds/src-min-noconflict/theme-tomorrow'


export default async function ({ router, store }, inject) {
    const useCDN = true;
    const CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.1/src-min-noconflict';
    if (useCDN) {
        ace.config.set('basePath', CDN);
        ace.config.set('modePath', CDN);
        ace.config.set('themePath', CDN);
        ace.config.set('workerPath', CDN);
    }

    inject('ace', ace)
}
