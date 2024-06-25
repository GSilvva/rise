<script setup>
const route = useRoute()
const open = ref(false)
const fixed = ref(false)

function nav() {
  if(document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) fixed.value = true
  else fixed.value = false
}

onMounted(() => { nav(), window.addEventListener("scroll", nav) })

defineProps({
  links: Array,
  button: String,
  lang: String
})
</script>

<template>
  <nav
    class="bg-black py-6 md:py-0 z-50 md:z-30 fixed top-0 left-0 w-full md:h-full translate-y-[-100%] md:opacity-0 md:invisible"
    :class="{
      '!opacity-100 !visible !translate-y-[0]': open,
      '!translate-y-[0]': fixed
    }"
  >
    <LayoutContainer>
      <div class="flex items-center justify-between md:flex-col md:h-screen">
        <NuxtLink class="md:hidden" :to="route.name === 'br' ? '/' : '/'">
          <NuxtImg src="/img/logo-horizontal.svg" alt="Rise Growth Marketing" />
        </NuxtLink>

        <ul v-if="links" class="flex gap-16 md:gap-12 md:flex-[2] md:items-center md:justify-center md:flex-col">
          <li
            v-for="i, index in links"
            :key="index"
          >
            <a
              class="relative font-normal hover:font-semibold text-base md:font-semibold md:text-[32px] text-[rgba(255,255,255,.5)] hover:text-white md:opacity-100 before:absolute before:left-0 before:bottom-[-32px] before:w-full before:h-0.5 before:duration-default before:bg-gradient-to-r before:from-light-blue before:to-pink before:opacity-0 before:invisible md:before:hidden hover:before:opacity-100 hover:before:visible md:leading-[120%] md:w-full md:text-center block"
              :href="i.url"
              @click="open = false"
            >
              {{ i.text }}
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-12 md:flex-col md:gap-16 md:pb-16">
          <LayoutNavButton @click="open = false" :text="button"></LayoutNavButton>
          <LayoutNavLanguage :text="lang" />
        </div>
      </div>
    </LayoutContainer>
  </nav>

  <nav
    class="py-6 absolute md:fixed top-0 left-0 w-full z-40"
    :class="{ 'md:bg-black': fixed }"
  >
    <LayoutContainer>
      <div class="relative flex justify-center md:justify-between">
        <NuxtLink :to="route.name === 'br' ? '/' : '/br'">
          <NuxtImg src="/img/logo-vertical.svg" class="md:hidden" alt="Rise Growth Marketing" />
          <NuxtImg src="/img/logo-horizontal.svg" class="hidden md:block h-8" alt="Rise Growth Marketing" />
        </NuxtLink>
        <div class="absolute top-2/4 translate-y-[-50%] right-0 md:hidden flex items-center gap-12">
          <LayoutNavButton @click="open = false" :text="button"></LayoutNavButton>
          <LayoutNavLanguage :text="lang" />
        </div>
        <button
          @click="open = !open"
          type="button"
          class="hidden md:flex w-8 h-8 items-center justify-end relative"
        >
          <span
            class="relative w-8 h-px block bg-white before:w-full before:h-px before:bg-white before:absolute before:right-0 before:top-[-8px] before:translate-y-[-100%] after:w-full after:h-px after:bg-white after:absolute after:right-0 after:bottom-[-8px] after:translate-y-[100%]"
            :class="{ '!bg-black rotate-[180deg] before:!translate-y-[8px] before:rotate-[-45deg] after:!translate-y-[-8px] after:rotate-[45deg]': open }"
          ></span>
        </button>
      </div>
    </LayoutContainer>
  </nav>

  <Style v-if="open" type="text/css" children="html { overflow: hidden; }"></Style>
</template>