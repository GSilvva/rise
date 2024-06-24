<template>
  <div>
    <LayoutNav
      :links="[
        {
          text: 'Cases',
          url: '/br#cases'
        },
        {
          text: 'Repertório',
          url: '/br#brands'
        },
        {
          text: 'Credenciais e Certificações',
          url: '/br#background'
        }
      ]"
      button="Contato"
      lang="Alterar para"
    />
    <slot />
    <LayoutFooter
      :email="{
        title: 'E-mail',
        text: 'contato@risead.com.br',
        url: 'mailto:contato@risead.com.br'
      }"
      :phone="{
        title: 'Telefone',
        text: '(11) 5555-3662',
        url: 'tel:+551155553662'
      }"
      :address="{
        title: 'Agende uma Visita',
        text: 'Av. Rebouças, 1585 - Pinheiros <br /> São Paulo - SP, 05401-200',
        url: 'https://maps.app.goo.gl/7MQj6z9Cq3UtcWYa8'
      }"
      top="Voltar para o topo"
    />
  </div>
</template>