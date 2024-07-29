<script setup>
import { ChevronRightIcon, Sparkles } from "lucide-vue-next";
import { Button } from "../ui/button";
</script>

<template>
  <section class="mb-10 mt-10 p-4 md:p-10 bg-[#FFFAEE]">
    <div class="ml-20">
      <div class="w-full mb-10 flex flex-col items-center md:flex-row">
        <h2 class="text-3xl font-bold">Learn Anywhere, Anytime.</h2>
      </div>
      <div
        className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-2"
      >
        <div class="text-start">
          <h3 class="text-2xl font-bold mb-5">Students</h3>
          <ul class="text-base space-y-5">
            <li>
              <Sparkles class="w-5 h-5" />Access knowledge and educational
              resources from any location.
            </li>
            <li>
              <Sparkles class="w-5 h-5" />Engage in courses designed to enhance
              your professional abilities.
            </li>
            <li>
              <Sparkles class="w-5 h-5" />Equip yourself with the expertise
              needed for career advancement.
            </li>
          </ul>
          <div class="flex w-full flex-col justify-center gap-4 lg:w-4/5">
            <Button class="group h-12 w-1/3 flex  mt-5">
              Become a Student
              <ChevronRightIcon
                class="w-5 h-5 transition ease-in-out delay-150 group-hover:translate-x-5 hover:scale-110 duration-300"
            /></Button>
          </div>
        </div>
        <div class="text-start">
          <h3 class="text-2xl font-bold mb-5">Teacher</h3>
          <ul class="text-base space-y-5">
            <li>
              <Sparkles class="w-5 h-5" />Access knowledge and educational
              resources from any location.
            </li>
            <li>
              <Sparkles class="w-5 h-5" />Engage in courses designed to enhance
              your professional abilities.
            </li>
            <li>
              <Sparkles class="w-5 h-5" />Equip yourself with the expertise
              needed for career advancement.
            </li>
          </ul>
          <div class="flex w-full flex-col justify-center gap-4 lg:w-4/5">
            <Button class="group h-12 w-1/3 flex mt-5">
              Become a Teacher 
              <ChevronRightIcon
                class="w-5 h-5 transition ease-in-out delay-150 group-hover:translate-x-5 hover:scale-110 duration-300"
            /></Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
