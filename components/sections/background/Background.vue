<script setup>
defineProps({
  title: String,
  sections: Array
})
</script>

<template>
  <section class="bg-white pt-[160px] sm:pt-20 pb-[160px] sm:pb-20" id="background">
    <LayoutContainer class="sm:!px-2">
      <UiTitle :text="title" black />
      <div class="flex flex-col gap-12 sm:gap-8">
        <section
          v-for="i, index in sections"
          :key="index"
          class="w-full"
        >
          <h6 class="text-black opacity-50 font-normal text-2xl sm:text-lg mb-3 sm:mb-1.5 pl-4">{{ i.title }}</h6>
          <ul class="grid grid-cols-6 md:grid-cols-3 sm:grid-cols-2 relative before:absolute before:z-10 before:right-0 before:top-0 before:bg-white before:w-px before:h-full w-full">
            <li
              v-for="l, index2 in i.logos"
              :key="index2"
              class="relative h-[120px] sm:h-[96px] flex items-center justify-center before:absolute before:bottom-0 before:left-2/4 before:translate-x-[-50%] before:h-px before:w-5/6 before:bg-[#C8C8C8] after:absolute after:top-2/4 after:translate-y-[-50%] after:w-px after:h-5/6 after:bg-[#C8C8C8] after:right-0 p-4"
            >
              <img
                :src="l.src"
                :alt="l.name"
                class="max-h-full sm:max-w-[80%]"
              >
            </li>
          </ul>
        </section>
      </div>
    </LayoutContainer>
  </section>  
</template>