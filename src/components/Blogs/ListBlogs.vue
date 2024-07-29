<template>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card class="p-3">
          <a href="#" class="group relative block h-48 overflow-hidden rounded-lg" prefetch={false}>
            <img
              src="@/assets/vue.svg"
              alt="News image"
              width={400}
              height={300}
              class="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
          </a>
          <div class="mt-4 space-y-2">
            <a
              href="#"
              class="block text-lg font-medium transition-colors hover:text-primary"
              prefetch={false}
            >
              Breaking News: Earthquake Hits California
            </a>
            <p class="text-muted-foreground">
              A powerful earthquake has struck California, causing widespread damage and disrupting transportation.
            </p>
          </div>
          <div class="flex justify-end px-4 mt-2">
            <Badge variant="outline">
    5
  </Badge>
            <ThumbsUp class="mr-3 ml-2 text-blue-600 " /> 
            <Badge variant="outline">
    18
  </Badge>
             <ThumbsDown class="ml-2 mt-1 text-blue-600"/>   </div>
        </Card>
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

import { ThumbsUp, ThumbsDown } from 'lucide-vue-next';
</script>