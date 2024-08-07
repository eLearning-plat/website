<template>
  <div class="grid gap-8">
    <div v-for="(course, index) in courses" :key="index">
    <div
      class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow border-2 border-gray-200"
    >
      <img
        :src="course.image"
        alt="Blog post cover"
        width="300"
        height="200"
        class="rounded-lg object-cover md:w-[300px] md:h-[200px] w-full h-auto"
      />
      <div class="flex-1 grid gap-2 start">
        Title :<a
          href="#"
          class="block text-lg  justify-start font-medium transition-colors hover:text-primary"
          prefetch="{false}"
        >
        {{ course.title }}
        </a>
        <p class="text-gray-700 start">
         Crated by {{ course. userId }}
        </p>
        <p class="text-gray-700 start">
          Category:   {{ course.category }}
        </p>
        <p class="text-gray-700 start">
          State:  {{ course.state }}
        </p>
      
        <p class="text-gray-700 start">
          Description :   {{ course.description }}
        </p>
     
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
/* .start{
  width: 100px;
} */
</style>
<script setup>
import Badge from "../ui/badge/Badge.vue";
import Button from "../ui/button/Button.vue";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { defineProps, onMounted } from 'vue';
import { ThumbsUp, ThumbsDown } from "lucide-vue-next";
const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  console.log('Received courses grid:', props.courses);
});
</script>
