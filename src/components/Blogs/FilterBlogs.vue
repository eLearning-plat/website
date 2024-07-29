<template>
      <section> <div class="w-64 hidden md:block mr-10">
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
        </section>
</template>
<script setup>

import Badge from '../ui/badge/Badge.vue';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
</script>