<script setup lang="ts">
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-vue-next";
</script>

<template>
  <section
    class="flex h-auto w-full flex-col-reverse bg-[#FFFAEE] lg:h-[70vh] lg:flex-row"
  >
    <div
      class="flex w-full flex-col items-center justify-center p-4 text-center lg:w-1/2 lg:p-0 lg:text-left"
    >
      <h2 class="mb-4 w-full text-lg font-semibold lg:w-4/5 lg:text-5xl">
        Your Path to Digital and Divine Knowledge
      </h2>
      <div class="flex w-full flex-col justify-center gap-4 lg:w-4/5">
        <Button class="group h-12 w-1/3 flex">
          Join Us <ChevronRightIcon class="w-5 h-5 transition ease-in-out delay-150 group-hover:translate-x-10 hover:scale-110 duration-300"
        /></Button>
      </div>
    </div>
    <div class="flex w-[100%] items-center justify-center lg:w-[50%]">
      <img
        src="@/assets/heroImage.avif"
        alt="placeholder"
        class="h-full w-[100%] object-cover lg:w-[100%]"
      />
    </div>
  </section>
</template>
