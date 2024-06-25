<script setup>
defineProps({
  text: String
})

const route = useRoute()
</script>

<template>
  <NuxtLink
    :to="route.name === 'br' ? '/' : '/br'"
    class="flex items-center gap-3"
    @click="open = false"
  >
    <span class="hidden md:block italic uppercase font-mono font-normal text-sm opacity-50">{{ text }}</span>
    <NuxtImg v-if="route.name === 'br'" src="/img/en.jpg" class="w-7 h-5" />
    <NuxtImg v-else src="/img/br.jpg" class="w-7 h-5" />
  </NuxtLink>
</template>