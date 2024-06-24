<script setup>
defineProps({
  title: String,
  text: String,
  image: String
})
</script>

<template>
  <section
    :style="`background-image:
    linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%),
    url('${image}');`"
    class="bg-cover bg-no-repeat bg-center pt-[200px] pb-20 sm:pt-28 sm:pb-16"
  >
    <LayoutContainer>
      <h1 class="text-center font-semibold text-[56px] leading-[120%] max-w-[640px] w-full mx-auto sm:text-[40px]" v-html="title"></h1>
      <p class="mt-6 text-center font-light italic text-2xl max-w-[680px] mx-auto w-full font-mono leading-[160%] sm:text-base">{{ text }}</p>
    </LayoutContainer>
  </section>
  <span class="block w-full h-px bg-gradient-to-l from-pink to-light-blue"></span>
</template>