<template>
  <main class="flex-1 mb-5">
    <NewBlog />
    <RecentBlogs />
    <MainBlog />
  </main>
</template>
<script setup>
import MainBlog from "@/components/Blogs/MainBlog.vue";
import ToolbarBlog from "../components/Blogs/ToolbarBlog.vue";
import RecentBlogs from "@/components/Blogs/RecentBlogs.vue";
import NewBlog from "@/components/Blogs/NewBlog.vue";


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
