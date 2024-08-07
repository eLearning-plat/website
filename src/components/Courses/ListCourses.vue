<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="(course, index) in courses" :key="index" class="h-80 flex flex-col justify-start"> <!-- Alignement à gauche -->
      <div class="p-3 h-full flex flex-col justify-start border rounded-lg shadow-md bg-white">
        <a href="#" class="group relative block h-1/2 overflow-hidden rounded-lg">
          <img
            :src="course.image"
            alt="News image"
            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </a>
        <div class="flex flex-col justify-start flex-grow mt-4 space-y-2"> <!-- Alignement à gauche -->
          <a href="#" class="block text-lg font-medium transition-colors hover:text-primary">
            Title :   {{ course.title }}
          </a>
          <p class="text-gray-700">
            Crated by {{ course.userId }}
          </p>
          <p class="text-gray-700">
            Category :   {{ course.category }}
          </p>
          <p class="text-gray-700">
            State :   {{ course.state }}
          </p>
          <p class="text-muted-foreground h-3/4">
            Description :   {{ course.description.slice(0, 100) }}<span v-if="course.description.length > 200">...</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import Badge from '../ui/badge/Badge.vue';
import Button from '../ui/button/Button.vue';
import {Card , CardContent ,CardHeader, CardTitle} from '../ui/card'

import { defineProps, onMounted } from 'vue';
import { ThumbsUp, ThumbsDown } from 'lucide-vue-next';
const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  console.log('Received courses:', props.courses);
});
</script>