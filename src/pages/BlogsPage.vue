<template>
  <main class="flex-1">
    <section class="bg-muted py-12 md:py-24">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6"
      >
        <div>
          <img
            src="@/assets/vue.svg"
            alt="Featured Blog Post"
            width="{800}"
            height="{450}"
            class="rounded-lg object-cover aspect-video"
          />
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <div
              class="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
            >
              Featured
            </div>
            <h2 class="text-3xl font-bold tracking-tighter">
              The Future of Web Development
            </h2>
          </div>
          <div class="flex items-center gap-2 text-muted-foreground">
            <div class="flex items-center gap-2">
              <img
                src="@/assets/vue.svg"
                alt="Author Avatar"
                width="{32}"
                height="{32}"
                class="rounded-full"
              />
              <span>John Doe</span>
            </div>
            <span>•</span>
            <span>June 1, 2023</span>
          </div>
          <p class="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
            lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet
            nisl.
          </p>
          <RouterLink
            to="#"
            class="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch="{false}"
          >
            Read More
            <ArrowRightIcon class="h-4 w-4" />
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="py-12 md:py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-8">
          <h2 class="text-2xl font-bold tracking-tighter">Recent Blog Posts</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group flex flex-col gap-4">
            <RouterLink to="#" class="block" prefetch="{false}">
              <img
                src="@/assets/vue.svg"
                alt="Blog Post Thumbnail"
                width="{400}"
                height="{225}"
                class="rounded-lg object-cover aspect-video"
              />
            </RouterLink>
            <div class="space-y-2">
              <RouterLink
                to="#"
                class="text-lg font-bold hover:underline"
                prefetch="{false}"
              >
                Mastering React Hooks
              </RouterLink>
              <p class="text-muted-foreground line-clamp-2">
                Explore the power of React Hooks and learn how to leverage them
                to build more efficient and maintainable web applications.
              </p>
            </div>
          </div>
          <div class="group flex flex-col gap-4">
            <RouterLink to="#" class="block" prefetch="{false}">
              <img
                src="@/assets/vue.svg"
                alt="Blog Post Thumbnail"
                width="{400}"
                height="{225}"
                class="rounded-lg object-cover aspect-video"
              />
            </RouterLink>
            <div class="space-y-2">
              <RouterLink
                to="#"
                class="text-lg font-bold hover:underline"
                prefetch="{false}"
              >
                Serverless with Next.js
              </RouterLink>
              <p class="text-muted-foreground line-clamp-2">
                Discover how to leverage the power of Next.js and serverless
                architecture to build fast and scalable web applications.
              </p>
            </div>
          </div>
          <div class="group flex flex-col gap-4">
            <RouterLink to="#" class="block" prefetch="{false}">
              <img
                src="@/assets/vue.svg"
                alt="Blog Post Thumbnail"
                width="{400}"
                height="{225}"
                class="rounded-lg object-cover aspect-video"
              />
            </RouterLink>
            <div class="space-y-2">
              <RouterLink
                to="#"
                class="text-lg font-bold hover:underline"
                prefetch="{false}"
              >
                Optimizing Web Performance
              </RouterLink>
              <p class="text-muted-foreground line-clamp-2">
                Learn best practices and techniques to optimize the performance
                of your web applications, ensuring a lightning-fast user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div>
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

    <div class="flex w-full">
      <section class="container flex justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div class="w-64 hidden md:block mr-10">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <nav class="space-y-2">
                <a
                  to="#"
                  class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  prefetch="{false}"
                >
                  <span>Quranic</span>
                  <Badge variant="outline">12</Badge>
                </a>
                <a
                  to="#"
                  class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  prefetch="{false}"
                >
                  <span>Sona</span>
                  <Badge variant="outline">24</Badge>
                </a>
                <a
                  to="#"
                  class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  prefetch="{false}"
                >
                  <span>Arabic</span>
                  <Badge variant="outline">18</Badge>
                </a>
                <a
                  to="#"
                  class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  prefetch="{false}"
                >
                  <span>English</span>
                  <Badge variant="outline">9</Badge>
                </a>
                <a
                  to="#"
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
          <div class="text-center grid gap-8 flex-grow mr-10">
            <GribBlogs v-if="isOn" />
            <ListBlogs v-if="!isOn" />
          </div>
        </div>
      </section>
    </div>
    <div><paginationPage /></div>
  </div>
</template>
<script setup>
import paginationPage from "@/components/pagination/paginaTion.vue";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ListBlogs from "@/components/Blogs/ListBlogs.vue";
import GribBlogs from "@/components/Blogs/GribBlogs.vue";
import { LayoutList, LayoutGrid, ArrowDownUp } from "lucide-vue-next";

import { mapState, mapActions } from "vuex";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
const isOn = ref(false);
const store = useStore();
const searchQuery = ref("");
const selectedFilter = ref("");
const blogs = computed(() => store.state.blogs.blogs);
const fetchblogs = async () => {
  try {
    await store.dispatch("blogs/fetchBlogs");
    console.log("Blogs fetched:", blogs.value);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};
const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return blogs.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) &&
      (selectedFilter.value === "" || item.category === selectedFilter.value)
  );
});
onMounted(() => {
  console.log("Component mounted");
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
