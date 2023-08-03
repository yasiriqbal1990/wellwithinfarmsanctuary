<script setup lang="ts">

import useBlogResource from "../../composables/useSingleBlog"
const {singleBlog, fetchSingleJob} = useBlogResource()
//@ts-ignore
const title = ref<string>("")
//@ts-ignore
const subject = ref<string>("")
//@ts-ignore
const body = ref<string>("")
//@ts-ignore
const route:any = useRoute()
//@ts-ignore
onMounted(async()=>{
   
   await fetchSingleJob("blogs",route.params.id)

   if(singleBlog){

       title.value = singleBlog[0].title;
       subject.value = singleBlog[0].subject;
       body.value = singleBlog[0].body;
       
   }
})


</script>

<template>
    <Header />
    <article class="flex max-w-xl flex-col items-start justify-between border-gray-100 mx-auto my-auto">
     <h1 class="text-2xl font-bold  ">{{ title }}</h1>
     <h6>{{ subject }}</h6>
     <p v-html="body" class="mt-2 mb-10"></p>

    </article>
</template>