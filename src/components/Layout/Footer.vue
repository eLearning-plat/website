<script setup lang="ts">
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-vue-next';
import Separator from '../ui/separator/Separator.vue';


</script>

<template>
    <footer class="bg-gray-800 text-white dark:bg-muted dark:text-muted-foreground py-12">
        <div class="container max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            <div class="grid gap-2">
                <h4 class="font-semibold">Company</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    About
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Team
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Careers
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    News
                </RouterLink>
            </div>
            <div class="grid gap-2">
                <h4 class="font-semibold">Products</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Web
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Mobile
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Enterprise
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Integrations
                </RouterLink>
            </div>
            <div class="grid gap-2">
                <h4 class="font-semibold">Resources</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Blog
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Documentation
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Support
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Tutorials
                </RouterLink>
            </div>
            <div class="grid gap-2">
                <h4 class="font-semibold">Legal</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Terms
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Privacy
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Cookies
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Licenses
                </RouterLink>
            </div>
        </div>
        <div class="container max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left">
            <div class="grid gap-2">
                <h4 class="font-semibold">Company</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    About
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Team
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Careers
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    News
                </RouterLink>
            </div>
            <div class="grid gap-2">
                <h4 class="font-semibold">Products</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Web
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Mobile
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Enterprise
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Integrations
                </RouterLink>
            </div>
            <div class="grid gap-2">
                <h4 class="font-semibold">Resources</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Blog
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Documentation
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Support
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Tutorials
                </RouterLink>
            </div>
            <div class="grid gap-2">
                <h4 class="font-semibold">Legal</h4>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Terms
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Privacy
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Cookies
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Licenses
                </RouterLink>
            </div>
        </div>
        <div class="container max-w-7xl mt-12 flex flex-col sm:flex-row items-center justify-between">
            <div class="flex gap-4">
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Privacy
                </RouterLink>
                <Separator orientation="vertical" />
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Security
                </RouterLink>
                <Separator orientation="vertical" />
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline" >
                    Accessibility
                </RouterLink>
            </div>
            <div class="flex gap-4 mt-4 sm:mt-0">
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline hover:text-white" >
                    <Twitter class="w-5 h-5" />
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline hover:text-white" >
                    <Facebook class="w-5 h-5" />
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline hover:text-white" >
                    <Instagram class="w-5 h-5" />
                </RouterLink>
                <RouterLink to="#" class="text-gray-400 text-sm hover:underline hover:text-white" >
                    <Linkedin class="w-5 h-5" />
                </RouterLink>
            </div>
        </div>
      <div class="container max-w-7xl mt-12 text-center text-sm text-muted-foreground dark:text-muted">
        &copy; 2024 Acme Inc. All rights reserved.
      </div>
    </footer>
</template>