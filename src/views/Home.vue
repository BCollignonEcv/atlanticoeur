<template>
  <div class="home page">
    <section-component 
      :title="'Cabinet de cardiologie \nSCM Atlanticoeur'"
      :sectionSetting="['landing','splited']"
    >
      <template v-slot:leftSide>
        <cabinet-description :data="cabinet.informations"/>
      </template>
      <template v-slot:rightSide>
        <specialities-dashboard :specialities="specialities" />
      </template>
    </section-component>
    <section-component :title="'Les différents praticiens du cabinet'">
      <doctors-card-list :data-doctors="doctorsSpe" :type-card="'small'"/>
    </section-component>
    <section-component 
      :title="'Les examens réalisés du cabinet'"
      :sectionSetting="['dark','fullHeight']"
    >
        <examen :data-examens="examens"/>
    </section-component>
    <section-component :title="'La clinique atlanticoeur'" :sectionSetting="['fullWidth']">
      <Slider :haveNavigation="true" :haveOverlayDescription="true" :limit="Object.keys(cabinet.photos).length">
        <template v-slot:sliderDescription>
          <cabinet-description :typeDescription="'full'" :data="cabinet.informations"/>
        </template>
        <template v-slot:slide>
          <CabinetSlide
            v-for="photo in cabinet.photos" 
            :key="photo.id" 
            :data="photo"
            class="slide"
          />
        </template>
      </Slider>
    </section-component>
  </div>
</template>

<script>

import Section from "@/components/global/Section"
import Slider from "@/components/global/Slider"
import DoctorCards from "@/components/doctor/DoctorCards"
import Examen from "@/components/examen/Examen"
import SpecialiesDashboard from "@/components/speciality/SpecialitiesDashboard"
import CabinetDescription from "@/components/cabinet/CabinetDescription"
import CabinetSlide from "@/components/cabinet/CabinetSlide"

export default {
  name: 'Home',
  components: {
        'section-component': Section,
        'doctors-card-list': DoctorCards,
        'examen': Examen,
        'specialities-dashboard': SpecialiesDashboard,
        'cabinet-description': CabinetDescription,
        CabinetSlide, Slider,
  },
  data() {
    return {
        doctors: [
          { 
            "id": 1, 
            "firstName": "Paul", 
            "lastName": "Jaillais",
            "pathImg": "Paul_Jaillais.png",
            "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/paul-jaillais?locale=fr",
            "specialities": [
              ["cardiologie", 0],
              ["cardiologie", 1],
            ],
            "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
            "vitalCard": "Acceptée",
            "tiersPayant": "Sécurité Sociale",
            "diplomes": ["Ancien interne","Chef de clinique assistant des hopitaux de Toulouse","DES pathologie cardiovasculaire","DU cardiologie du sport","DU médecines subaquatique"],
            "RPPS": 10003840369
          },
          { 
              "id": 2, 
              "firstName": "Michel", 
              "lastName": "Fesolowicz",
              "pathImg": "Paul_Jaillais.png",
              "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/michel-fesolowicz?locale=fr",
              "specialities": [
                ["angiologie", 0],
                ["cardiologie", 1],
              ],                  "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
              "vitalCard": "Acceptée",
              "tiersPayant": "Sécurité Sociale",
              "diplomes": ["Ancien interne","Chef de clinique assistant des hopitaux de Toulouse","DES pathologie cardiovasculaire","DU cardiologie du sport","DU médecines subaquatique"],
              "RPPS": 10003840369
          },
          { 
              "id": 3, 
              "firstName": "Cyril", 
              "lastName": "Huet",
              "pathImg": "Paul_Jaillais.png",
              "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/cyril-huet?locale=fr",
              "specialities": [
                ["cardiologie", 0],
                ["cardiologie", 1],
              ],
              "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
              "vitalCard": "Acceptée",
              "tiersPayant": "Sécurité Sociale",
              "diplomes": ["Ancien interne","Chef de clinique assistant des hopitaux de Toulouse","DES pathologie cardiovasculaire","DU cardiologie du sport","DU médecines subaquatique"],
              "RPPS": 10003840369
          },
          { 
              "id": 4, 
              "firstName": "Edouard", 
              "lastName": "Majou",
              "pathImg": "Paul_Jaillais.png",
              "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/edouard-majou?locale=fr",
              "specialities": [
                ["cardiologie", 0],
                ["cardiologie", 1],
              ],
              "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
              "vitalCard": "Acceptée",
              "tiersPayant": "Sécurité Sociale",
              "diplomes": ["Ancien interne","Chef de clinique assistant des hopitaux de Toulouse","DES pathologie cardiovasculaire","DU cardiologie du sport","DU médecines subaquatique"],
              "RPPS": 10003840369
          }
        ],
        specialities: 
          {
            "cardiologie": {
              "id": 1,
              "name": "Cardiologie",
              "pathImg": "/specialities/cardiologie.png",
              "discover": "Qu'est ce que la cardiologie",
              "subcategory": [
                {
                  "name": "Cardiologie adulte",
                  "description": "hello description",
                },
                {
                  "name": "Cardiologie du sport",
                  "description": "hello description",
                },
                {
                  "name": "Cardiologie adulte",
                  "description": "hello description",
                }
              ]
            },
            "angiologie": {
              "id": 2,
              "name": "Angiologie",
              "pathImg": "/specialities/angiologie.png",
              "discover": "Qu'est ce que l'angiologie",
              "subcategory": [
                {
                  "name": "Angiologie",
                  "description": "hello description",
                }
              ]
            },
            "demo": {
              "id": 3,
              "name": "Demo",
              "pathImg": "/specialities/angiologie.png",
              "discover": "Qu'est ce que la demo",
              "subcategory": [
                {
                  "name": "Angiologie",
                  "description": "hello description",
                }
              ]
            },
        },
        examens: [
          {
              "id": 1,
              "name": "Electrocardiogramme",
              "description": "Description electrocardiogramme"
          },{
              "id": 2,
              "name": "Test effort",
              "description": "Description demo"
          },{
              "id": 3,
              "name": "Echocardiographie",
              "description": "Description demo"
          },{
              "id": 4,
              "name": "Holter Rythmique",
              "description": "Description demo"
          },{
              "id": 5,
              "name": "Holter Tensionnel",
              "description": "Description demo"
          },{
              "id": 6,
              "name": "Controle pacemaker",
              "description": "Description demo"
          },
        ],
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
              "phone": "0546410753",
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
              "content": "hello"
            },
            "photos": [
              {
                "id": 1,
                "name": "Salle d'attente",
                "pathImg": "/cabinets/salle1.png",
              },
              {
                "id": 2,
                "name": "Salle d'attente",
                "pathImg": "/cabinets/salle1.png",
              },
              {
                "id": 3,
                "name": "Salle d'attente",
                "pathImg": "/cabinets/salle1.png",
              },
              {
                "id": 4,
                "name": "Salle d'attente",
                "pathImg": "/cabinets/salle1.png",
              },{
                "id": 5,
                "name": "Salle d'attente",
                "pathImg": "/cabinets/salle1.png",
              }
            ]
          },
        doctorsSpe: [],
    }
  },
  methods: {
       // Change speciality index by content
        includeSpecialities(){
            this.doctors.forEach((doctor) => {
                Object.entries(doctor.specialities).forEach(entry => {
                    const [key, value] = entry;
                    doctor.specialities[key] = this.specialities[value[0]].subcategory[value[1]]
                });
                this.doctorsSpe.push(doctor);
            });
        }
    },
    created () {
        this.includeSpecialities();
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
  .l_container{
    &>*{
      flex: 1;
    }
  }

  h2{

  }

  .full_page{
    min-height: 100vh;
  }
</style>
