<template>
    <div>
        <div class="flex justify-end container px-4 pt-8 sm:px-6 lg:px-8">
      
          <Button class="  "
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
          </Button>
          <Button  variant="outline" class=" mr-10 ml-4 border-blue-600 border"> <ArrowDownUp class="text-blue-600 " /></Button></div>
  
    <div class="flex w-full">
       
      <main class="container flex justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div class="w-64 hidden md:block  mr-10 ">
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
        
      
          <!-- <Label>Switch State: {{ isOn ? "Grid" : "List" }}</Label> -->
          <div
              class=" text-center grid gap-8 flex-grow mr-10"
            >
         
          <GribBlogs v-if="isOn" /> 
          <ListBlogs v-if="!isOn" />
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
  import ListBlogs from "@/components/Blogs/ListBlogs.vue";
  import GribBlogs from "@/components/Blogs/GribBlogs.vue";
  import {LayoutList, LayoutGrid, ArrowDownUp} from 'lucide-vue-next'
  
import { mapState, mapActions } from 'vuex';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const isOn = ref(false);
const store = useStore();
const searchQuery = ref('');
const selectedFilter = ref('');
const blogs = computed(() => store.state.blogs.blogs);
const fetchblogs = async () => {
  try {
    await store.dispatch('blogs/fetchBlogs');
    console.log('Blogs fetched:', blogs.value);
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};
const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return blogs.value.filter(item =>
    item.title.toLowerCase().includes(query) &&
    (selectedFilter.value === '' || item.category === selectedFilter.value)
  );
});
onMounted(() => {
  console.log('Component mounted');
  fetchblogs();
});
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
    width: 16rem;
  }
  </style>