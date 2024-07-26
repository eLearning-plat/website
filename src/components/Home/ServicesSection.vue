
<template>
  <section class="mb-10 mt-10 p-4 md:p-10">
    <div
      class="w-full mb-10 flex flex-col items-center justify-center md:flex-row"
    >
      <h2 class="text-3xl font-bold">Learn Anywhere, Anytime.</h2>
    </div>
    <div
      class="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3"
    >
      <div class="group flex cursor-pointer flex-col items-center">
        <img
          src="@/assets/online_study.svg"
          alt="Service 1"
          width="250"
          height="250"
          class="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-5"
        />
        <div class="w-fit flex flex-col items-center">
          <h3 class="mt-7 text-xl font-bold">Learn Anywhere, Anytime.</h3>
          <div
            class=" mb-2  h-[0.5px] w-0 bg-black transition-all delay-150 duration-1000 ease-in-out group-hover:w-full"
          ></div>
        </div>
        <p class="max-w-[80%] text-sm text-gray-500">
          Access knowledge and educational resources from any location, at any
          time that suits your schedule.
        </p>
      </div>
      <div class="group flex cursor-pointer flex-col items-center">
        <img
          src="@/assets/mentoring.svg"
          alt="Service 1"
          width="250"
          height="250"
          class="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-5"
        />
        <div class="w-fit flex flex-col items-center">
          <h3 class="mt-7 text-xl font-bold">Master Professional Skills.</h3>
          <div
            class="mb-2 left-0 h-[0.5px] w-0 bg-black transition-all delay-150 duration-1000 ease-in-out group-hover:w-full"
          ></div>
        </div>
        <p class="max-w-[80%] text-sm text-gray-500">
          Engage in courses designed to enhance your professional abilities,
          equipping you with the expertise needed for career advancement.
        </p>
      </div>
      <div class="group flex cursor-pointer flex-col items-center">
        <img
          src="@/assets/job_ready.svg"
          alt="Service 2"
          width="250"
          height="250"
          class="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-5"
        />
        <div class="w-fit flex flex-col items-center">
          <h3 class="mt-7 text-xl font-bold">Succeed Beyond Boundaries.</h3>
          <div
            class=" mb-2 left-0 h-[0.5px] w-0 bg-black transition-all delay-150 duration-1000 ease-in-out group-hover:w-full"
          ></div>
        </div>
        <p class="max-w-[80%] text-sm text-gray-500">
          Break through limitations and achieve your goals, leveraging your
          newfound knowledge and skills to excel in your field.
        </p>
      </div>
    </div>
  </section>
</template>
