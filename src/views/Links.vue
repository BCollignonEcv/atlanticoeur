<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les différents liens utiles <br>recommandés</h1>
    </div>
    <div>
      <grid :data-links="links"/>
    </div>
    <section-component v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </section-component>
    <FooterOverlay :data="cabinet.informations" @showContactModal="toggleModalContacts"/>
    <Modal v-if="showContacts" @close="toggleModalContacts">
    <Contact :data="cabinet.informations" />
  </Modal>
  </div>
</template>

<script>

import Section from "@/components/global/Section"
import Cta from "@/components/global/Cta"
import Grid from "@/components/grid/Grid"
import FooterOverlay from "@/components/global/footer/FooterOverlay"
import Contact from "@/components/modal/contact"
import Modal from "@/components/global/Modal"


export default {
  name: 'links',
  components: {
    'section-component': Section,
    'grid': Grid,
    Cta, FooterOverlay, Contact, Modal
  },
  data() {
        return {
            links:
              {
                "header": {
                    "title": "Source de contenu", 
                    "link": "Typologie"
                  },
                  "content": [
                    {
                      "title": "macirculation.com",
                      "link": "https://www.macirculation.com/",
                      "category": "Cardiologie",
                      "date": "2021"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "category": "Cardiologie",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "category": "Cardiologie",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "category": "Cardiologie",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "category": "Cardiologie",
                      "date": "2020"
                    }
                  ]
            },
            takeAppointment: false,
            showContacts: false,
            open: 1
        }
  },
  methods: {
    toggleModalAppointment(){
      this.takeAppointment = false
    },
    toggleModalContacts(){
      this.showContacts = !this.showContacts
    }
  }
}
</script>

<style lang="scss" scoped>
</style>