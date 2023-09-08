  <script setup>
  import { ref } from 'vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>
<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">  
          <NuxtLink to="/blogs/" class="text-sm font-semibold leading-6 text-gray-900 hover:underline">About</NuxtLink>
          <NuxtLink to="/manage-blogs/add-blog" class="text-sm font-semibold leading-6 text-gray-900">Shop</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">Blog</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">Events</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">Donate</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">Testimonials</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">Gallery</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">FAQ</NuxtLink>
          <NuxtLink to="#" class="text-sm font-semibold leading-6 text-gray-900">Contact Us</NuxtLink>



        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="/manage-blogs" class="text-sm font-semibold leading-6 text-gray-900">Manage Blogs <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink to="/blogs/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</NuxtLink>
                <NuxtLink to="/manage-blogs/add-blog" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Shop</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Events</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Donate</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Testimonials</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Gallery</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQ</NuxtLink>
                <NuxtLink href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</NuxtLink>


              </div>
              <div class="py-6">
                <NuxtLink to="/manage-blogs" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Manage Blogs</NuxtLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
