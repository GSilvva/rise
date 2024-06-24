<script setup>
defineProps({
  href: String,
  blank: Boolean,
  submit: Boolean,
  outlined: Boolean
})
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    :target="blank ? '_blank' : '_self'"
    :class="{ outlined }"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="submit ? 'submit' : 'button'"
    :class="{ outlined }"
  >
    <slot/>
  </button>
</template>

<style lang="postcss" scoped>
a,
button {
  @apply font-semibold font-mono text-base bg-pink text-white hover:bg-light-blue px-14 py-4 text-center inline-flex items-center justify-center gap-4 uppercase;

  &.outlined {
    @apply bg-transparent text-pink border border-pink hover:bg-pink hover:text-white;
  }
}
</style>