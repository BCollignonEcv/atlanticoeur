<template>
  <div class="page">
    <section-component :title="'Les praticiens du cabinet \nSCM Atlanticœur'" :sectionSetting="['landing']">
      <doctors-card-list :data-doctors="doctorsSpe" :type-card="'big'" @eventSelected="newSelected"/>
    </section-component>
    <section-component :sectionSetting="['grey']">
      <doctors-description-list :doctor-selected="doctorSelected" :data-doctors="doctorsSpe" @eventSelected="newSelected"/>
    </section-component>
     <section-component :title="'Les spécialités du cabinet \nSCM Atlanticœur'" :sectionSetting="['fullWidth', 'bigTitle']">
      <Slider :haveNavigation="true" :limit="Object.keys(specialities).length">
        <template v-slot:slide>
          <SpecialitiesSlide
            v-for="speciality in specialities" 
            :key="speciality.id" 
            :data-speciality="speciality"
            class="slide"
          />
        </template>
      </Slider>
    </section-component>
  </div>
</template>

<script>

import DoctorCards from "@/components/doctor/DoctorCards"
import DoctorDescriptions from "@/components/doctor/DoctorDescriptions"
import Slider from "@/components/global/Slider"
import Section from "@/components/global/Section"
import SpecialitiesSlide from "@/components/speciality/SpecialitiesSlide"


export default {
  name: 'Praticiens',
  components: {
    'doctors-card-list': DoctorCards,
    'doctors-description-list': DoctorDescriptions,
    'section-component': Section,
    Slider, SpecialitiesSlide
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
                "conventionType": 1,
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
                  ],
                  "conventionType": 1,                  
                  "presentation": "Le docteur Michel Fesolowicz vous reçoit dans son cabinet à Puilboreau - La Rochelle. Le domaine du médecin vasculaire, ou angiologue, est celui des vaisseaux : artères (artérite, anévrismes, accidents vasculaires..), veines (insuffisance, varices, phlébites), capillaires, lymphatiques. Son diagnostic notamment l'écho-Doppler est déterminant pour la prise en charge de ces maladies.",
                  "vitalCard": "Acceptée",
                  "tiersPayant": "Sécurité Sociale",
                  "diplomes": ["Capacité d'angiologie - Université Paris 6 - Broussais"],
                  "RPPS": 10003840435
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
                  "conventionType": 1,
                  "presentation": "Le docteur Cyril HUET vous accueille dans son cabinet à Puilboreau. Le praticien réalise des consultations de cardiologie adulte et pédiatrique.",
                  "vitalCard": "Acceptée",
                  "tiersPayant": "Sécurité Sociale",
                  "RPPS": 10002700218
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
                  "conventionType": 1,
                  "presentation": "Le cardiologue est spécialiste du cœur et de ses pathologies ainsi que des problèmes vasculaires. Vous pouvez le consulter en cas d'insuffisance cardiaque, de péricardite ou plus généralement d’essoufflements anormaux, de palpitations ou encore de douleurs thoraciques.",
                  "vitalCard": "Acceptée",
                  "tiersPayant": "Sécurité Sociale",
                  "diplomes": ["DES de pathologie cardio vasculaire - CHU de tours",],
                  "RPPS": 10002084035
              }
            ],
            specialities: 
            {
              "cardiologie": {
                "id": 1,
                "name": "Cardiologie",
                "pathImg": "/specialities/cardiologie.png",
                "discover": "Qu'est ce que la cardiologie",
                "description": "La cardiologie s’intéresse à l’appareil cardiovasculaire, c’est-à-dire au cœur et aux vaisseaux (artères et veines), à la prévention ainsi qu’au traitement des anomalies et des maladies qui l’affectent : hypertension artérielle, insuffisance cardiaque, troubles du rythme cardiaque, angine de poitrine, athérosclérose …",
                "subcategory": [
                  {
                    "name": "Cardiologie adulte",
                    "description": "hello description",
                    "pathImg": "/specialities/dashboard-angiologie.png"
                  },
                  {
                    "name": "Cardiologie du sport",
                    "description": "hello description",
                    "pathImg": "/specialities/dashboard-angiologie.png"
                  },
                  {
                    "name": "Cardiologie adulte",
                    "description": "hello description",
                    "pathImg": "/specialities/dashboard-angiologie.png"
                  }
                ]
              },
              "angiologie": {
                "id": 2,
                "name": "Angiologie",
                "pathImg": "/specialities/angiologie.png",
                "discover": "Qu'est ce que l'angiologie",
                "description": "A côté de la Cardiologie, dons le domaine d’exercice est bien connu de tous, s’est développé une discipline s’intéressant aux vaisseaux. Le domaine du médecin vasculaire, ou angiologue, est celui des artères (artérite, anévrysmes, accidents vasculaires…), des veines (insuffisance, varices, phlébites), des capillaires (microcirculation), des lymphatiques. Son diagnostic notamment écho-Doppler est déterminant pour la prise en charge de ces maladies. L’essor des ultrasons de ces décennies a solidifié le socle de le discipline. \nCardiologie et médecine vasculaires sont des spécialités synergiques, les facteurs de risques, les pathologies sont intriquées. Aujourd’hui la Médecine Vasculaire a parcouru un grand chemin qui lui a donné une reconnaissance universitaire, et bénéficie d’une formation impliquant un parcours en partie commun avec la cardiologie. \nEn pratique, le médecin vasculaire exerce au carrefour de la médecine générale, de la cardiologie, de la chirurgie vasculaire, de la neurologie, de la médecine interne.",
                "subcategory": [
                  {
                    "name": "Angiologie",
                    "description": "hello description",
                    "pathImg": "/specialities/dashboard-angiologie.png"
                  }
                ]
              },
            },
            doctorsSpe: [],
            doctorSelected: 1,
            specialitySelected: null,
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
        },
        newSelected (value) {
            this.doctorSelected = value;
        }
    },
    created () {
        this.includeSpecialities();
    },
    mounted (){
    },
    watch: {
      doctorSelected: function(id){
        if(id != null){
          setTimeout(function(){ 
            document.getElementById('doctorDescription'+id).scrollIntoView({behavior: "smooth", block: "center"})
          }, 200);
        }
      }
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