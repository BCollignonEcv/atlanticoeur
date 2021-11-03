<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les différents liens utiles <br>recommandés</h1>
    </div>
    <div>
      <grid :data-links="links"/>
    </div>
    <section-component :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </section-component>
    <FooterOverlay :data="cabinet.informations"/>
  </div>
</template>

<script>

import Section from "@/components/global/Section"
import Cta from "@/components/global/Cta"
import Grid from "@/components/grid/Grid"
import FooterOverlay from "@/components/global/FooterOverlay"


export default {
  name: 'links',
  components: {
    'section-component': Section,
    'grid': Grid,
    Cta, FooterOverlay
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
            cabinet: 
            {
                "informations": 
                {
                  "name": "Clinique de l'Atlanticoeur",
                  "description": "Description cabinet",
                  "number": 26,
                  "address": "rue Moulin des justices",
                  "city": "Puilboreau",
                  "postalCode": 17138,
                  "googleMap": "https://maps.google.com/maps?q=26%20rue%20Moulin%20des%20justices%2017138%20Puilboreau+(Atlanticoeur)&t=&z=11&ie=UTF8&iwloc=&output=embed",
                  "phone": "0546410753",
                  "phoneDisplay": "05 46 41 07 53",
                  "email": "contact@atlanticoeur.fr",
                  "horaires": {
                    "days": {
                      0: "Lundi",
                      1: "Vendredi"
                    },
                    "hours": 
                    {
                        0: '8:30', 
                        1: '19:00'
                    },
                  },
                  "content": "Nous sommes ravis de vous accueillir à notre cabinet, vous trouverez une brève présentation de nos cardiologues, les modalités de prises de rendez-vous, des images et des plans pour localiser plus facilement nos cabinets. \n Enfin, vous trouverez des liens et des adresses vers d’autres organismes de santé qui pourront vous être utiles dans votre prise en charge."
                },
                "photos": [
                  {
                    "id": 0,
                    "name": "Acceuil",
                    "pathImg": "cabinets/acceuil_cabinet_de_cardiologie_atlanticoeur.jpg",
                  },{
                    "id": 1,
                    "name": "Acceuil",
                    "pathImg": "cabinets/acceuil_cabinet_de_cardiologie_atlanticoeur.jpg",
                  },
                  {
                    "id": 2,
                    "name": "Salle d'attente",
                    "pathImg": "cabinets/salle_attente_2_cabinet_de_cardiologie_atlanticoeur.jpg",
                  },
                  {
                    "id": 3,
                    "name": "Cabinet Jaillais",
                    "pathImg": "cabinets/docteur_jaillais_2_cabinet_de_cardiologie_atlanticoeur.jpg",
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