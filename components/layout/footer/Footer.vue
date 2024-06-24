<script setup>
import { VectorsEmail, VectorsPhone, VectorsAddress } from "#components"

defineProps({
  email: Object,
  phone: Object,
  address: Object,
  top: String
})
</script>

<template>
  <footer class="py-[120px] md:pt-20 md:pb-10" id="contact">
    <LayoutContainer>
      <div class="flex gap-16 md:gap-10 md:flex-col md:items-center">
        <div class="flex flex-col items-center gap-6 md:gap-8">
          <div class="flex items-center justify-center h-[200px] md:h-auto">
            <VectorsLogoFooter />
          </div>
          <div class="h-[250px] md:h-auto flex items-center flex-col md:flex-row justify-center gap-6">
            <a href="https://www.instagram.com/somosrise/" target="_blank">
              <VectorsInstagram />
            </a>
            <a href="https://www.linkedin.com/company/risead/" target="_blank">
              <VectorsLinkedin />
            </a>
          </div>
        </div>
        <div class="w-full">
          <div class="flex md:flex-col gap-6 mb-6">
            <div
              v-for="i, index in [
                {
                  icon: VectorsEmail,
                  ...email
                },
                {
                  icon: VectorsPhone,
                  ...phone
                },
                {
                  icon: VectorsAddress,
                  ...address
                }
              ]"
              :key="index"
              class="flex-1 bg-[rgba(255,255,255,.08)] h-[200px] p-6 gap-6 flex flex-col"
            >
              <div class="flex-[2]">
                <div class="flex items-center gap-6">
                  <component :is="i.icon" />
                  <h6 class="font-semibold text-base font-mono uppercase">{{ i.title }}</h6>
                </div>
              </div>
              <a
                :href="i.url"
                v-html="i.text"
                target="_blank"
                class="font-medium text-lg min-h-[56px] md:min-h-0 hover:opacity-80"
              ></a>
            </div>
          </div> 
          <iframe class="sm:h-[200px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.139386639536!2d-46.67863372466987!3d-23.56343687879846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b401987b69%3A0x5dd09815b26794a0!2sDistrito!5e0!3m2!1spt-BR!2sbr!4v1719242293390!5m2!1spt-BR!2sbr" width="100%" height="250" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Distrito Fintech"></iframe>
          <div class="flex items-center justify-between md:flex-col-reverse md:gap-4 mt-10">
            <p class="text-sm font-light opacity-50 md:text-center">Copyright © {{ new Date().getFullYear() }} Rise Marketing Servicos Ltda CNPJ: 34.561.892/0001-11</p>
            <button class="font-semibold text-sm uppercase font-mono tracking-[2px] md:text-center" @click="$scrollTop" type="button">{{ top }}</button>
          </div>
        </div>
      </div>
    </LayoutContainer>
  </footer>
</template>