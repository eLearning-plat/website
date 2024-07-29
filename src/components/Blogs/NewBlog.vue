<template>
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
</template>