<script setup>
const props = defineProps({
  title: String,
  brands: Array,
  button: String
})

const max = ref(0)
max.value = props.brands.length

onMounted(() => { if(window.matchMedia("(max-width: 640px)").matches) max.value = 6 })
</script>

<template>
  <section class="bg-white pt-[160px] sm:pt-20" id="brands">
    <LayoutContainer class="sm:!px-2 flex flex-col items-center">
      <UiTitle :text="title" black />
      <ul class="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 relative before:absolute before:z-10 before:right-0 before:top-0 before:bg-white before:w-px before:h-full after:absolute after:right-0 after:bottom-3 after:bg-white after:w-full after:h-px w-full">
        <li
          v-for="i, index in brands.slice(0, max)"
          :key="index"
          class="p-3 sm:p-2 relative h-[192px] sm:h-[120px] before:absolute before:top-3 before:right-0 before:w-px before:h-[144px] sm:before:h-[96px] before:bg-[#C8C8C8] sm:before:top-1"
        >
          <figure class="border-b border-[#C8C8C8] w-full flex items-center justify-center h-full">
            <img
              :src="i.src"
              :alt="i.name"
              class="max-h-[96px] sm:max-h-[64px] sm:max-w-[72%] grayscale hover:grayscale-0"
            >
          </figure>
        </li>
      </ul>
      <UiButton
        v-if="max < brands.length"
        @click="max+=4"
        class="mt-12 hidden sm:inline-flex"
      >
        {{ button }}
      </UiButton>
    </LayoutContainer>
  </section>
</template>