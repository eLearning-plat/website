<template>
  <section>
    <div class="flex justify-end container px-4 pt-8 sm:px-6 lg:px-8 mb-5">
      <Button
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
        <ArrowDownUp class="text-blue-600" />
      </Button>
    </div>
  </section>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { LayoutList, LayoutGrid, ArrowDownUp } from "lucide-vue-next";
import { ref, defineEmits } from "vue";

const isOn = ref(false);
const emit = defineEmits(['toggle']);

const toggleSwitch = () => {
  isOn.value = !isOn.value;
  emit('toggle', isOn.value);
};
</script>
