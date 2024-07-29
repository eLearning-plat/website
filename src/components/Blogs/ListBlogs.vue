<template>
   <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="(blog, index) in blogs" :key="index" class="h-80 flex flex-col justify-between"> <!-- Adjusted height and alignment -->
      <div class="p-3 h-full flex flex-col justify-between border rounded-lg shadow-md bg-white">
        <a href="#" class="group relative block h-1/2 overflow-hidden rounded-lg">
          <img
            src="@/assets/vue.svg"
            alt="News image"
            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </a>
        <div class="flex flex-col justify-between flex-grow mt-4 space-y-2">
          <a href="#" class="block text-lg font-medium transition-colors hover:text-primary">
            {{ blog.title }}
          </a>
          <p class="text-muted-foreground h-3/4">
            {{ blog.description.slice(0, 100) }}<span v-if="blog.description.length > 200">...</span>
          </p>
        </div>
        <div class="flex justify-end mt-2">
          <span class="badge badge-outline">5</span>
          <ThumbsUp class="mr-3 ml-2 text-blue-600" />
          <span class="badge badge-outline">18</span>
          <ThumbsDown class="ml-2 mt-1 text-blue-600" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.w-full {
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
.w-64 {
  width: 16rem; 
}
</style>

<script setup>
import Badge from '../ui/badge/Badge.vue';
import Button from '../ui/button/Button.vue';
import {Card , CardContent ,CardHeader, CardTitle} from '../ui/card'

import { defineProps, onMounted } from 'vue';
import { ThumbsUp, ThumbsDown } from 'lucide-vue-next';
const props = defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  console.log('Received blogs:', props.blogs);
});
</script>