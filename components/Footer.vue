<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>
<template>
   

   <footer style="background-color: #092d4c;">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <nuxt-link to="/" class="flex items-center">
                  <img src="/images/logo.png" class="h-20 mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">WellInFormSanctuary</span>
              </nuxt-link>
             <p class="mt-10 text-white pr-5 md:p-0 md:w-96 ">The idea of Well Within Farm Sanctuary was planted with the intention of being more than a traditional farm. Its need was sprouted from the necessity to become sustainable in not only traditional farm practices but in many aspects of life</p>
            </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">QuickLinks</h2>
                  <ul class="font-medium text-white">
                      <li class="mb-2">
                          <a href="#" class="hover:underline">About</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Shop</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Events</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Blog</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Events</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Quick Links</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-2">
                          <a href="#" class="hover:underline ">Donate</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Testimonials</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Gallery</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">FAQ</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                  <ul class="text-white  font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-lg text-white sm:text-center ">Copyright © 2014- {{ currentYear }} <a href="#" class="hover:underline">WellInFormSanctuary</a> | Website developed & hosted by <a href="https://schrader.co/" class="hover:text-red-600">Schrader Web Solutions</a>
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" class="text-white hover:text-red-600 ">
                  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
          </div>
      </div>
    </div>
</footer>


</template>