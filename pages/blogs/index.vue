<script setup lang="ts">
import useBlogResource from "../../composables/useBlogResource"


const {blogs} = useBlogResource("blogs")


  
</script>
<template>
    <Header />
    <h1 class="text-4xl text-center font-bold">Our Blogs</h1>
   <div class="flex flex-row mx-10 my-10" >
    <div class="max-w-sm m-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="blog in blogs" :key="blog.id">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blog.title }}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="blog.body.split(' ').slice(0, 50).join(' ')"></p>
    <NuxtLink :to="`/blogs/${blog.id}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </NuxtLink>
</div>
</div>

  </template>
  
