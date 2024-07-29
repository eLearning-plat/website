<template>
  <div>
  <div class="flex w-full">
    <main class="container flex justify-between px-4 py-8 sm:px-6 lg:px-8">
      <div class="w-64 hidden md:block mt-7 mr-10 ">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-2">
            <a
              href="#"
              class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch="{false}"
            >
              <span>Quranic</span>
              <Badge variant="outline">12</Badge>
            </a>
            <a
              href="#"
              class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch="{false}"
            >
              <span>Sona</span>
              <Badge variant="outline">24</Badge>
            </a>
            <a
              href="#"
              class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch="{false}"
            >
              <span>Arabic</span>
              <Badge variant="outline">18</Badge>
            </a>
            <a
              href="#"
              class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch="{false}"
            >
              <span>English</span>
              <Badge variant="outline">9</Badge>
            </a>
            <a
              href="#"
              class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch="{false}"
            >
              <span>Computer</span>
              <Badge variant="outline">15</Badge>
            </a>
          </nav>
        </CardContent>
      </Card>
    </div>
      <div>
      
     <div class="flex justify-between">
      <Button  variant="outline" class="mt-7 mb-5 "> <ArrowDownUp  /></Button>
        <Button class="mt-7 mr-10 mb-5 "
      :class="{ 'switch-on': isOn, 'switch-off': !isOn }"
      @click="toggleSwitch"
      id="airplane-mode"
    >
    <template v-if="isOn">
        <LayoutGrid />
      </template>
      <template v-else>
        <LayoutList />
      </template>
        </Button></div>
        <!-- <Label>Switch State: {{ isOn ? "Grid" : "List" }}</Label> -->
        <div
            class=" text-center grid gap-8 flex-grow mr-10"
          >
       
        <CardGridNews v-if="isOn" /> 
        <CardNews v-if="!isOn" />
        </div>
      </div>
    
    </main>
 
  </div>
  <div><paginationPage/></div></div>
</template>
<script setup>
import paginationPage from '@/components/pagination/paginaTion.vue'
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardNews from "@/components/News/CardNews.vue";
import CardGridNews from "@/components/News/CardGridNews.vue";
import {LayoutList, LayoutGrid, ArrowDownUp} from 'lucide-vue-next'
import { ref } from "vue";
const isOn = ref(false);

const toggleSwitch = () => {
  isOn.value = !isOn.value;
};
</script>
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
  width: 16rem; /* Width of the sidebar */
}
</style>