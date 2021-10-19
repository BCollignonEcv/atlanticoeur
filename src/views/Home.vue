<template>
  <div class="home page">
    <section-component 
      :title="'Cabinet de cardiologie \nSCM Atlanticoeur'"
      :sectionSetting="['landing','splited']"
    >
      <template v-slot:leftSide>
        <cabinet-description :cabinet="cabinet[0]"/>
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
    <section-component :title="'La clinique atlanticoeur'">
      <cabinet-slider :data-cabinet="cabinet"/>
    </section-component>
  </div>
</template>

<script>

import Section from "@/components/global/Section"
import DoctorCards from "@/components/doctor/DoctorCards"
import Examen from "@/components/examen/Examen"
import SpecialiesDashboard from "@/components/speciality/SpecialitiesDashboard"
import CabinetDescription from "@/components/cabinet/CabinetDescription"
import CabinetSlider from "@/components/cabinet/CabinetSlider"

export default {
  name: 'Home',
  components: {
        'section-component': Section,
        'doctors-card-list': DoctorCards,
        'examen': Examen,
        'specialities-dashboard': SpecialiesDashboard,
        'cabinet-description': CabinetDescription,
        'cabinet-slider': CabinetSlider,
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
        specialities: [
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
          }
        ],
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
        cabinet: [
          {
            "name": "Clinique de l'Atlanticoeur",
            "description": "Description cabinet",
            "address": "26 rue Moulin des justices",
            "city": "Puilboreau",
            "postalCode": 17138,
            "pictures": [
              {
                "name": "Salle d'attente",
                "pathImg": "/specialities/cardiologie.png",
              },
              {
                "name": "Salle d'attente",
                "pathImg": "/specialities/cardiologie.png",
              },
              {
                "name": "Salle d'attente",
                "pathImg": "/specialities/cardiologie.png",
              },
              {
                "name": "Salle d'attente",
                "pathImg": "/specialities/cardiologie.png",
              },{
                "name": "Salle d'attente",
                "pathImg": "/specialities/cardiologie.png",
              }
            ]
          }
        ],
        doctorsSpe: [],
    }
  },
  methods: {
       // Change speciality index by content
        includeSpecialities(){
            this.doctors.forEach((doctor) => {
                Object.entries(doctor.specialities).forEach(entry => {
                    const [key, value] = entry;
                    doctor.specialities[key] = this.specialities[0][value[0]].subcategory[value[1]]
                });
                this.doctorsSpe.push(doctor);
            });
        }
    },
    created () {
        this.includeSpecialities();
    },
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
