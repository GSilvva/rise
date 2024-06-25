<script setup>
definePageMeta({
  layout: "default-br"
})

useHead({
  titleTemplate: title => `${title} | Growth Marketing`
})
</script>

<template>
  <SectionsBanner
    title="Coloque seus resultados na direção certa."
    text="Somos uma growth delivery marketing que entrega resultados reais e tangíveis em suas estratégias de negócios."
    image="/img/banner.jpg"
  />
  <SectionsCases
    title="Nossos Cases"
    :cases="[
      {
        image: '/img/case1.jpg',
        url: 'https://www.youtube.com/watch?v=y_r5kkkp4RY&t=1s&ab_channel=RISE',
        subtitle: 'Melnick',
        title: 'Melnick Day'
      },
      {
        image: '/img/case2.jpg',
        url: 'https://www.youtube.com/watch?v=pTK60bvXPsM',
        subtitle: 'Zapsign',
        title: 'Facilita aí!'
      },
      {
        image: '/img/case3.jpg',
        url: 'https://www.youtube.com/watch?v=Xs5kOhPCoUw',
        subtitle: 'Americas',
        title: 'Medicina Esportiva Samaritano'
      },
      {
        image: '/img/case4.jpg',
        url: 'https://www.youtube.com/watch?v=pnJhJPXhuA4',
        subtitle: 'Unisapiens',
        title: 'Uma Fusão Inteligente'
      },
      {
        image: '/img/case5.jpg',
        url: 'https://www.youtube.com/watch?v=AsAr9lvaYSA',
        subtitle: 'Colégio Sapiens',
        title: 'Autoatendimento por Chatbot'
      },
      {
        image: '/img/case6.jpg',
        url: 'https://www.youtube.com/watch?v=dn3Ab61jAL4',
        subtitle: 'Americas',
        title: 'Saúde e Performance'
      },
      {
        image: '/img/case7.jpg',
        url: 'https://www.youtube.com/watch?v=ywIpYokdBVg',
        subtitle: 'Midea',
        title: 'Casa Surpreendente - 2ª Temporada'
      },
      {
        image: '/img/case8.jpg',
        url: 'https://www.youtube.com/watch?v=RSIucHfQReU',
        subtitle: 'Midea',
        title: 'Simulador de Cozinha'
      },
      {
        image: '/img/case9.jpg',
        url: 'https://www.youtube.com/watch?v=KvR4nRNBqsA',
        subtitle: '',
        title: 'Iorane'
      }
    ]"
    button="Ver mais"
  />
  <SectionsBrands
    title="Nosso Repertório"
    :brands="[
      {
        src: '/img/midea.png',
        name: 'Midea'
      },
      {
        src: '/img/smzto.png',
        name: 'SMZTO'
      },
      {
        src: '/img/toshiba.png',
        name: 'Toshiba'
      },
      {
        src: '/img/melnick.png',
        name: 'Melnick'
      },
      {
        src: '/img/alibaba.png',
        name: 'Alibaba.com'
      },
      {
        src: '/img/amil.png',
        name: 'Amil'
      },
      {
        src: '/img/carapreta.png',
        name: 'Carapreta'
      },
      {
        src: '/img/warner.png',
        name: 'Warner'
      },
      {
        src: '/img/maplebear.png',
        name: 'Maplebear'
      },
      {
        src: '/img/zapsign.png',
        name: 'Zapsign'
      },
      {
        src: '/img/iorane.png',
        name: 'Iorane'
      },
      {
        src: '/img/selfit.png',
        name: 'Selfit'
      },
      {
        src: '/img/renault.png',
        name: 'Renault'
      },
      {
        src: '/img/unicred.png',
        name: 'Unicred'
      },
      {
        src: '/img/sapiens.png',
        name: 'Sapiens'
      },
      {
        src: '/img/moura.png',
        name: 'Moura Dubeux'
      },
      {
        src: '/img/saipos.png',
        name: 'Saipos'
      },
      {
        src: '/img/gupy.png',
        name: 'Gupy'
      },
      {
        src: '/img/direcional.png',
        name: 'Direcional'
      },
      {
        src: '/img/startse.png',
        name: 'StartSe'
      },
      {
        src: '/img/cna.png',
        name: 'CNA'
      },
      {
        src: '/img/lopes.png',
        name: 'Lopes'
      },
      {
        src: '/img/planet.png',
        name: 'Planet Smart City'
      },
      {
        src: '/img/lyx.png',
        name: 'Lyx'
      },
      {
        src: '/img/dasa.png',
        name: 'Dasa'
      },
      {
        src: '/img/vialaser.png',
        name: 'Vialaser'
      },
      {
        src: '/img/exmed.png',
        name: 'Exmed'
      },
      {
        src: '/img/nortis.png',
        name: 'Nortis'
      }
    ]"
    button="Ver mais"
  />
  <SectionsBackground
    title="Nossas Credenciais e Certificações"
    :sections="[
      {
        title: 'Advertising',
        logos: [
          {
            src: '/img/googlepartner.png',
            name: 'Google Partner'
          },
          {
            src: '/img/metabusiness.png',
            name: 'Meta Business Partner'
          },
          {
            src: '/img/ttkmarketing.png',
            name: 'TikTok Marketing'
          },
          {
            src: '/img/amazonads.png',
            name: 'Amazon Advertising'
          },
          {
            src: '/img/pinterest.png',
            name: 'Pinterest'
          },
          {
            src: '/img/uber.png',
            name: 'Uber'
          },
          {
            src: '/img/msads.png',
            name: 'Microsoft Advertising'
          },
          {
            src: '/img/kwai.png',
            name: 'Kwai'
          },
          {
            src: '/img/onestation.png',
            name: 'One Station Media'
          },
          {
            src: '/img/mediaplus.png',
            name: 'Globo Media Plus Business Partner'
          },
          {
            src: '/img/linkedin.png',
            name: 'Linkedin Certified Marketing Partner'
          },
          {
            src: '/img/x.png',
            name: 'X'
          }
        ]
      },
      {
        title: 'Relationship',
        logos: [
          {
            src: '/img/salesforce.png',
            name: 'Salesforce'
          },
          {
            src: '/img/hubspot.png',
            name: 'Hubspot'
          },
          {
            src: '/img/rdstation.png',
            name: 'RD Station'
          },
          {
            src: '/img/active.png',
            name: 'Active Campaign Partner'
          },
          {
            src: '/img/kommo.png',
            name: 'Kommo Partner'
          }
        ]
      },
      {
        title: 'Cloud Data',
        logos: [
          {
            src: '/img/aws.png',
            name: 'AWS'
          },
          {
            src: '/img/azure.png',
            name: 'Azure'
          },
          {
            src: '/img/googlecloud.png',
            name: 'Google Cloud'
          },
          {
            src: '/img/aep.png',
            name: 'Adobe Experience Platform'
          },
          {
            src: '/img/acquia.png',
            name: 'Acquia Preferred Partner'
          }
        ]
      },
      {
        title: 'Audience',
        logos: [
          {
            src: '/img/analytics.png',
            name: 'Google Analytics 360 Suite'
          },
          {
            src: '/img/semrush.png',
            name: 'Semrush'
          },
          {
            src: '/img/tail.png',
            name: 'Tail by TOTVS'
          },
          {
            src: '/img/moat.png',
            name: 'Moat'
          },
          {
            src: '/img/serasa.png',
            name: 'Serasa Experian'
          },
          {
            src: '/img/ampliva.png',
            name: 'Ampliva'
          }
        ]
      },
      {
        title: 'E-commerce',
        logos: [
          {
            src: '/img/vtex.png',
            name: 'VTEX Partner'
          },
          {
            src: '/img/shopify.png',
            name: 'Shopify Partner'
          }
        ]
      },
      {
        title: 'Dataviz',
        logos: [
          {
            src: '/img/tableau.png',
            name: 'Tableau'
          },
          {
            src: '/img/adobeanalytics.png',
            name: 'Adobe Analytics'
          },
          {
            src: '/img/powerbi.png',
            name: 'Power BI'
          },
          {
            src: '/img/grafanalabs.png',
            name: 'Grafana Labs'
          },
          {
            src: '/img/klipfolio.png',
            name: 'Klipfolio'
          },
          {
            src: '/img/looker.png',
            name: 'Looker'
          }
        ]
      },
      {
        title: 'Social',
        logos: [
          {
            src: '/img/stilingue.png',
            name: 'Stilingue'
          },
          {
            src: '/img/buzz.png',
            name: 'Buzz Monitor'
          },
          {
            src: '/img/sprout.png',
            name: 'Sprout Social'
          },
          {
            src: '/img/tagger.png',
            name: 'Tagger'
          }
        ]
      },
      {
        title: 'Certified',
        logos: [
          {
            src: '/img/gptw.png',
            name: 'Great Place To Work'
          },
          {
            src: '/img/scopen.png',
            name: 'Scopen'
          },
          {
            src: '/img/cenp.png',
            name: 'CENP'
          }
        ]
      }
    ]"
  />
</template>