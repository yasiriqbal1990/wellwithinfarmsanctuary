<script setup lang="ts">
import useBlogResource from "../../composables/useBlogResource"



const {blogs} = useBlogResource("blogs")



</script>
<template>
<Header />

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white text-center">Manage Blogs</h1>

<BlogTable :blogs="blogs"/>


</template>