<template>
  <div class="page">
    <section-component :title="'Les praticiens du cabinet \nSCM Atlanticœur'" :sectionSetting="['landing']">
      <doctors-card-list :data-doctors="doctorsSpe" :type-card="'big'"/>
    </section-component>
    <section-component :sectionSetting="['grey']">
      <doctors-description-list :selected-item="selected" :data-doctors="doctorsSpe"/>
    </section-component>
     <section-component :title="'Les spécialités du cabinet \nSCM Atlanticœur'" :sectionSetting="['fullWidth']">
      <specialities-slider :data-specialities="specialities[0]"/>
    </section-component>
  </div>
</template>

<script>

import DoctorCards from "@/components/doctor/DoctorCards"
import DoctorDescriptions from "@/components/doctor/DoctorDescriptions"
import SpecialitiesSlider from "@/components/speciality/SpecialitiesSlider"
import Section from "@/components/global/Section"


export default {
  name: 'Praticiens',
  components: {
    'doctors-card-list': DoctorCards,
    'doctors-description-list': DoctorDescriptions,
    'specialities-slider': SpecialitiesSlider,
    'section-component': Section
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
            doctorsSpe: [],
            selected: 1
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
    mounted (){
    }
}
</script>

<style lang="scss" scoped>
  .links{
    p{
        color: $color-primary;
    }
  } 
</style>