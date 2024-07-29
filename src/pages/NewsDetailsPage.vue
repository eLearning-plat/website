<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <main
      class="flex-1 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-6 md:p-12"
    >
      <div class="grid gap-8">
        <Card>
          <img
            src="@/assets/vue.svg"
            width="800"
            height="450"
            alt="News Article"
            class="aspect-[16/9] overflow-hidden rounded-t-md object-cover"
          />
          <CardContent>
            <div class="flex items-center justify-between">
              <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Breaking News
              </div>
              <div
                class="flex items-center gap-2 text-xs font-medium text-muted-foreground"
              >
                <CalendarIcon class="w-4 h-4" />
                <span>June 1, 2023</span>
              </div>
            </div>
            <h1 class="text-3xl font-bold tracking-tighter">
              Groundbreaking Discovery in Quantum Physics
            </h1>
            <p class="text-muted-foreground">
              Scientists have made a breakthrough in understanding the
              fundamental nature of the universe, with implications for future
              technology.
            </p>
            <div class="flex items-center gap-4 mt-4">
              <Avatar class="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div
                class="flex items-center gap-1 text-xs font-medium text-muted-foreground"
              >
                <span>By John Doe</span>
                <Separator orientation="vertical" class="h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <div class="prose max-w-none">
          <h2 class="text-3xl font-bold tracking-tighter">The Breakthrough</h2>
          <p>
            The breakthrough came when a team of researchers at the prestigious
            University of Cambridge were able to observe and measure the
            behavior of subatomic particles in a way that challenges our current
            understanding of the universe.
          </p>
          <p>
            "This is a pivotal moment in the history of physics," said lead
            researcher Dr. Emily Sharma. "We have uncovered new insights\n into
            the fundamental building blocks of reality, and these\n findings
            could pave the way for revolutionary new technologies\n in the
            future."
          </p>
        </div>
      </div>
      <div class="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Related News</CardTitle>
          </CardHeader>
          <CardContent>
            <nav class="grid gap-4">
              <RouterLink
                to="#"
                class="flex items-center gap-4 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                prefetch="{false}"
              >
                <img
                  src="@/assets/vue.svg"
                  width="64"
                  height="64"
                  alt="Related News"
                  class="aspect-square overflow-hidden rounded-md object-cover"
                />
                <div class="flex-1 space-y-1">
                  <h4 class="font-medium">
                    Local Community Rallies to Support Families in Need
                  </h4>
                  <p class="text-muted-foreground">
                    Volunteers and local businesses come together to provide
                    essential resources.
                  </p>
                </div>
              </RouterLink>
              <RouterLink
                to="#"
                class="flex items-center gap-4 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                prefetch="{false}"
              >
                <img
                  src="@/assets/vue.svg"
                  width="64"
                  height="64"
                  alt="Related News"
                  class="aspect-square overflow-hidden rounded-md object-cover"
                />
                <div class="flex-1 space-y-1">
                  <h4 class="font-medium">
                    New Sustainable Energy Initiative Launched in City
                  </h4>
                  <p class="text-muted-foreground">
                    The city government has unveiled a plan to transition to
                    renewable energy sources.
                  </p>
                </div>
              </RouterLink>
              <RouterLink
                to="#"
                class="flex items-center gap-4 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                prefetch="{false}"
              >
                <img
                  src="@/assets/vue.svg"
                  width="64"
                  height="64"
                  alt="Related News"
                  class="aspect-square overflow-hidden rounded-md object-cover"
                />
                <div class="flex-1 space-y-1">
                  <h4 class="font-medium">
                    Local Artist Showcases Vibrant Mural in Downtown District
                  </h4>
                  <p class="text-muted-foreground">
                    The newly completed mural has become a popular attraction.
                  </p>
                </div>
              </RouterLink>
            </nav>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Share</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <FacebookIcon class="w-5 h-5" />
                <span class="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <TwitterIcon class="w-5 h-5" />
                <span class="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <LinkedinIcon class="w-5 h-5" />
                <span class="sr-only">Share on RouterLinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MailIcon class="w-5 h-5" />
                <span class="sr-only">Share by Email</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <footer
      class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
    >
      <p class="text-xs text-muted-foreground">
        &copy; 2024 Acme Inc. All rights reserved.
      </p>
      <nav class="sm:ml-auto flex gap-4 sm:gap-6">
        <RouterLink
          to="#"
          class="text-xs hover:underline underline-offset-4"
          prefetch="{false}"
        >
          Terms of Service
        </RouterLink>
        <RouterLink
          to="#"
          class="text-xs hover:underline underline-offset-4"
          prefetch="{false}"
        >
          Privacy
        </RouterLink>
      </nav>
    </footer>
  </div>
</template>
