<template>
  <div class="grid gap-8">
    <div v-for="(blog, index) in blogs" :key="index">
    <div
      class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow border-2 border-gray-200"
    >
      <img
        src="@/assets/vue.svg"
        alt="Blog post cover"
        width="300"
        height="200"
        class="rounded-lg object-cover md:w-[300px] md:h-[200px] w-full h-auto"
      />
      <div class="flex-1 grid gap-2">
        <a
          href="#"
          class="block text-lg  font-medium transition-colors hover:text-primary"
          prefetch="{false}"
        >
        {{ blog.title }}
        </a>
        <p class="text-gray-700 ">
          {{ blog.description }}
        </p>
        <div class="flex justify-end px-4 mt-2 h-fit">
          <Badge variant="outline"> 5 </Badge>
          <ThumbsUp class="mr-3 ml-2 text-blue-600" />
          <Badge variant="outline"> 18 </Badge>
          <ThumbsDown class="ml-2 mt-1 text-blue-600" />
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
import Badge from "../ui/badge/Badge.vue";
import Button from "../ui/button/Button.vue";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { defineProps, onMounted } from 'vue';
import { ThumbsUp, ThumbsDown } from "lucide-vue-next";
const props = defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  console.log('Received blogs grid:', props.blogs);
});
</script>
