<script setup>
const route = useRoute()

defineProps({
  text: String
})
</script>

<template>
  <NuxtLink
    v-if="text"
    :to="route.name === 'br' ? '#contato' : '#contact'"
    class="after:w-full after:h-px after:bg-[rgba(255,255,255,.5)] after:block after:mt-3"
  >
    <span class="text-white font-medium text-base md:text-2xl flex items-center gap-2 uppercase">
      {{ text }}
      <VectorsArrowLink />
    </span>
  </NuxtLink>
</template>