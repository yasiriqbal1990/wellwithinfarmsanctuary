import { defineNuxtPlugin } from '#app'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import BlotFormatter from 'quill-blot-formatter'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('QuillEditor', QuillEditor);

   
});