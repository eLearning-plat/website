<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
import Footer from "./components/Layout/Footer.vue";
</script>
<template>
  <main>
    <NavBar />
    <router-view/>
    <Footer/>
  </main>
</template>
