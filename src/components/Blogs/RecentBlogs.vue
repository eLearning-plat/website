<template>
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
</template>