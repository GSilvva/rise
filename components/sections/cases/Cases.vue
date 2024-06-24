<script setup>
defineProps({
  title: String,
  cases: Array,
  button: String
})

const max = ref(6)

onMounted(() => { if(window.matchMedia("(max-width: 640px)").matches) max.value = 3 })
</script>

<template>
  <section class="bg-white" id="cases">
    <div class="bg-black pt-[160px] sm:pt-20 pb-20 sm:pb-12">
      <LayoutContainer>
        <UiTitle class="!mb-0" :text="title" />
      </LayoutContainer>
    </div>
    <div class="relative before:absolute before:top-0 before:left-0 before:w-full before:h-[230px] sm:before:h-[160px] before:z-10 before:bg-black">
      <LayoutContainer class="flex flex-col items-center relative z-20">
        <ul class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full">
          <li
            v-for="i, index in cases.slice(0, max)"
            :key="index"
          >
            <NuxtLink
              :to="i.url"
              target="_blank"
              class="h-[460px] sm:h-[320px] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,.32)] before:z-20 before:transition-default flex items-end group after:absolute after:top-0 after:left-0 after:bg-gradient-to-r after:to-pink after:from-light-blue after:z-20 after:w-full after:h-full after:opacity-0 hover:after:opacity-80 hover:before:opacity-0 after:transition-default"
            >
              <img
                :src="i.image"
                :alt="i.title"
                class="absolute z-10 top-0 left-0 w-full h-full object-cover"
              >
              <VectorsPlay v-if="i.url" class="absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] z-30" />
              <div class="z-30 pb-10 sm:pb-8 px-6 sm:px-4 w-full opacity-0 sm:opacity-100 group-hover:opacity-100">
                <h6 v-if="i.subtitle" class="uppercase text-center opacity-60 font-light font-mono text-sm mb-2">{{ i.subtitle }}</h6>
                <h5 v-if="i.title" class="font-semibold text-2xl text-center leading-[120%]">{{ i.title }}</h5>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <UiButton
          v-if="max < cases.length"
          @click="max = cases.length"
          class="mt-16 sm:mt-12"
        >
          {{ button }}
        </UiButton>
      </LayoutContainer>
    </div>
  </section>
</template>