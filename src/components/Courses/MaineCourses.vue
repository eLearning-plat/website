<template>
    <section>
      <ToolbarBlog @toggle="handleToggle" />
      <div class="flex w-full">
        <div class="container flex justify-between px-4 sm:px-6 lg:px-8">
          <FilterBlogs />
          <div v-if="loading">Loading...</div>
          <div class="text-center grid gap-8 flex-grow mr-10 mb-4">
            <ListCourses  v-if="isOn" :courses="courses" />
            <GridCourses v-else :courses="courses"/>
         
            <p v-if="!loading && courses.length === 0">No blogs available.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import GridCourses from './GridCourses.vue';
  import ListCourses from './ListCourses.vue';
  import FilterBlogs from '@/components/Blogs/FilterBlogs.vue';
  import ToolbarBlog from '@/components/Blogs/ToolbarBlog.vue';
  import { ref, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const courses = computed(() => store.state.courses.courses || []);
  const loading = ref(true);
  
  const fetchCourses = async (filters = {}) => {
      try {
        await store.dispatch('courses/fetchCourses', filters);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        loading.value = false;
      }
    };
  
  onMounted(() => {
    console.log('Component mounted');
    const filters = {
        
        state: true,
      };
    fetchCourses(filters);
  });
  
  const isOn = ref(false);
  
  const handleToggle = (value) => {
    isOn.value = value;
  };
  </script>