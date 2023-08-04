<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import BlotFormatter from 'quill-blot-formatter'

// import { addDoc, collection } from "firebase/firestore"
const router:any = useRouter()
const title = ref<string>("")
const subject = ref<string>("")
const body = ref<string>("")
const nuxtApp:any = useNuxtApp()


const modules = [{
    name: 'blotFormatter',  
    module: BlotFormatter, 
    options: {/* options */}
  }
]



const postBlog = async() =>{
  const db = nuxtApp.$db

  
try {
  const blogRef = await nuxtApp.$addDoc(nuxtApp.$collection(db, 'blogs'), {
  title:title.value,
  subject: subject.value,
  body:body.value
});
router.push('/manage-blogs')
console.log(blogRef)
} catch(error){
  console.log(error)
}

}






</script>
<template>
   <ClientOnly>
    <form  method="POST" @submit.prevent="postBlog" class="mx-auto mt-10 max-w-xl sm:mt-14">
    <div class="sm:col-span-2 mt-6">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Title: </label>
        <div class="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" placeholder="Enter Post Title" v-model="title"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2 mt-6">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Subject: </label>
        <div class="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" placeholder="Enter Post Subject" v-model="subject" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2 mt-6 mb-2">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Body: </label>
    <QuillEditor theme="snow" :modules="modules" toolbar="full" :content="body" contentType="html" placeholder="Write here"/>
 </div>
 <div class="mt-10 mb-20">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </div>
  </form>
</ClientOnly>
  </template>
  

<style scoped>
 

</style>