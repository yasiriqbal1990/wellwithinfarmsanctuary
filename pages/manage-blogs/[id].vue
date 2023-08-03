<script setup lang="ts">
import useBlogResource from "../../composables/useSingleBlog"

const {singleBlog, fetchSingleJob} = useBlogResource()
const route:any = useRoute()

const title = ref<string>("")
const subject = ref<string>("")
const body = ref<string>("")

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
    <EditBlog/>
</template>
