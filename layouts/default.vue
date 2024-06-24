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
        text: '(11) 5555-3662',
        url: 'tel:+551155553662'
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