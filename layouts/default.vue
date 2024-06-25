<template>
  <div>
    <LayoutNav
      :links="[
        {
          text: 'Cases',
          url: '/#cases'
        },
        {
          text: 'Brands',
          url: '/#brands'
        },
        {
          text: 'Background',
          url: '/#background'
        }
      ]"
      button="Contact Us"
      lang="Change For"
    />
    <slot />
    <LayoutFooter
      :email="{
        title: 'E-mail',
        text: 'contato@risead.com.br',
        url: 'mailto:contato@risead.com.br'
      }"
      :phone="{
        title: 'Phone',
        text: '+55 (11) 4673-3468',
        url: 'tel:+551146733468'
      }"
      :address="{
        title: 'Book a visit',
        text: 'Av. Rebouças, 1585 - Pinheiros <br /> São Paulo - SP, 05401-200',
        url: 'https://maps.app.goo.gl/7MQj6z9Cq3UtcWYa8'
      }"
      top="Back to top"
    />
  </div>
</template>