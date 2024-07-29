<template>
  <div class="pagination mt-6 flex justify-center items-center p-4">
    <button 
      :class="['px-4 py-2 border border-gray-300 rounded', currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-gray-100']"
      :disabled="currentPage === 1"
      @click="goToPreviousPage"
    >
      Previous
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      :class="['px-4 py-2 border border-gray-300 rounded mx-2', currentPage === page ? 'bg-blue-500 text-white' : 'text-blue-600 hover:bg-gray-100']"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>
    <button 
      :class="['px-4 py-2 border border-gray-300 rounded', currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-gray-100']"
      :disabled="currentPage === totalPages"
      @click="goToNextPage"
    >
      Next
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'paginationPage',
  setup() {
    const currentPage = ref(1)
    const totalPages = 5 // Adjust this to your total number of pages

    const goToPage = (page) => {
      currentPage.value = page
    }

    const goToPreviousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1
      }
    }

    const goToNextPage = () => {
      if (currentPage.value < totalPages) {
        currentPage.value += 1
      }
    }

    return {
      currentPage,
      totalPages,
      goToPage,
      goToPreviousPage,
      goToNextPage
    }
  }
}
</script>

<style>
.pagination button:disabled {
  pointer-events: none;
}
</style>
