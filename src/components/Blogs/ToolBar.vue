<script setup lang="js">
import { ArrowDownUp, LayoutGrid, LayoutList } from 'lucide-vue-next';
import { Button } from '../ui/button';
const toggleSwitch = () => {
  isOn.value = !isOn.value;
};
</script>

<template>
    <div class="flex justify-end container px-4 pt-8 sm:px-6 lg:px-8">
      <Button
        class="  "
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
      <Button variant="outline" class="mr-10 ml-4 border-blue-600 border">
        <ArrowDownUp class="text-blue-600"
      /></Button>
    </div>
</template>