<script setup>
defineProps({
  text: String,
  black: Boolean
})
</script>

<template>
  <h2
    class="text-center font-semibold text-[64px] sm:text-[40px] mb-20 sm:mb-12"
    :class="{ 'text-black': black }"
  >
    {{ text }}
  </h2>
</template>