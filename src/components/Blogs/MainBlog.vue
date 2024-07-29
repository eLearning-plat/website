<template>
  <section>
    <ToolbarBlog @toggle="handleToggle" />
    <div class="flex w-full">
      <div class="container flex justify-between px-4 sm:px-6 lg:px-8">
        <FilterBlogs />
        <div v-if="loading">Loading...</div>
        <div class="text-center grid gap-8 flex-grow mr-10 mb-4">
          <ListBlogs  v-if="isOn" :blogs="blogs" />
          <GribBlogs v-else :blogs="blogs"/>
       
          <p v-if="!loading && blogs.length === 0">No blogs available.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GribBlogs from './GribBlogs.vue';
import ListBlogs from './ListBlogs.vue';
import FilterBlogs from '@/components/Blogs/FilterBlogs.vue';
import ToolbarBlog from '@/components/Blogs/ToolbarBlog.vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blogs = computed(() => store.state.blogs.blogs || []);
const loading = ref(true);

const fetchBlogs = async () => {
  try {
    await store.dispatch('blogs/fetchBlogs');
    console.log('Blogs fetched:', blogs.value);
  } catch (error) {
    console.error('Error fetching blogs:', error);
  } finally {
    loading.value = false; 
  }
};

onMounted(() => {
  console.log('Component mounted');
  fetchBlogs();
});

const isOn = ref(false);

const handleToggle = (value) => {
  isOn.value = value;
};
</script>

