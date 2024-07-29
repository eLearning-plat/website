<template>
    <div class="grid gap-8">
          <div class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow border-2 border-gray-200">
            <img
              src="@/assets/vue.svg"
              alt="Blog post cover"
              width="300"
              height="200"
              class="rounded-lg object-cover md:w-[300px] md:h-[200px] w-full h-auto"
            />
            <div class="flex-1 grid gap-2">
            
              <a
                      href="#"
                      class="block text-lg font-medium transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      Breaking News: Earthquake Hits California
                    </a>
              <p class="text-gray-700">
                A powerful earthquake has struck California, causing widespread damage and disrupting
                transportation.
              </p>
            
            </div>
          </div>
        </div>
</template>