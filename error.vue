<script setup>
useHead({
  titleTemplate: title => `${title} | Growth Marketing`
})
</script>

<template>
  <LayoutContainer>
    <div class="flex flex-col justify-center items-center h-screen pt-10">
      <NuxtLink to="/">
        <VectorsLogoHorizontal />
      </NuxtLink>
      <div class="flex-[2] flex flex-col justify-center items-center">
        <VectorsError class="max-w-full sm:h-[128px]" />
        <UiButton href="/">Back to home</UiButton>
      </div>
    </div>
  </LayoutContainer>
</template>