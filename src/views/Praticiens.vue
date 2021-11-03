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
    <section-component :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </section-component>
  </div>
</template>

<script>

import DoctorCards from "@/components/doctor/DoctorCards"
import DoctorDescriptions from "@/components/doctor/DoctorDescriptions"
import Slider from "@/components/global/Slider"
import Section from "@/components/global/Section"
import Cta from "@/components/global/Cta"
import SpecialitiesSlide from "@/components/speciality/SpecialitiesSlide"


export default {
  name: 'Praticiens',
  components: {
    'doctors-card-list': DoctorCards,
    'doctors-description-list': DoctorDescriptions,
    'section-component': Section,
    Slider, SpecialitiesSlide, Cta
  },
  data() {
        return {
            doctors: [
              { 
                "id": 1, 
                "firstName": "Paul", 
                "lastName": "Jaillais",
                "pathImg": "doctors/cardiologue_paul_jaillais-cabinet_de_cardiologie-atlanticoeur.jpg",
                "doctorName": "Cardiologue",
                "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/paul-jaillais?locale=fr",
                "specialities": [0,2],
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
                  "pathImg": "doctors/cardiologue_michel_fesolowicz-cabinet_de_cardiologie-atlanticoeur.jpg",
                  "doctorName": "Angiologue",
                  "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/michel-fesolowicz?locale=fr",
                  "specialities": [4],
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
                  "pathImg": "doctors/cardiologue_cyril_huet-cabinet_de_cardiologie-atlanticoeur.jpg",
                  "doctorName": "Cardiologue",
                  "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/cyril-huet?locale=fr",
                  "specialities": [1],
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
                  "pathImg": "doctors/cardiologue_edouard_majou-cabinet_de_cardiologie-atlanticoeur.jpg",
                  "doctorName": "Cardiologue",
                  "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/edouard-majou?locale=fr",
                  "specialities": [0,1],
                  "conventionType": 1,
                  "presentation": "Le cardiologue est spécialiste du cœur et de ses pathologies ainsi que des problèmes vasculaires. Vous pouvez le consulter en cas d'insuffisance cardiaque, de péricardite ou plus généralement d’essoufflements anormaux, de palpitations ou encore de douleurs thoraciques.",
                  "vitalCard": "Acceptée",
                  "tiersPayant": "Sécurité Sociale",
                  "diplomes": ["DES de pathologie cardio vasculaire - CHU de tours",],
                  "RPPS": 10002084035
              }
            ],
            specialities: [
              {
                "id": 0,
                "category": 0,
                "name": "Cardiologie adulte",
                "pathImg": "specialities/cardiologie_adulte-cabinet_de_cardiologie_atlanticoeur.png",
                "description": "La cardiologie adulte s’intéresse à l’appareil cardiovasculaire, c’est-à-dire au cœur et aux vaisseaux (artères et veines), à la prévention ainsi qu’au traitement des anomalies et des maladies qui l’affectent : hypertension artérielle, insuffisance cardiaque, troubles du rythme cardiaque, angine de poitrine, athérosclérose …",
              },
              {
                "id": 1,
                "category": 0,
                "name": "Cardiologie pédiatrique",
                "pathImg": "specialities/cardiologie_pediatrique-cabinet_de_cardiologie_atlanticoeur.png",
                "description": "La cardiologie adulte s’intéresse à l’appareil cardiovasculaire, c’est-à-dire au cœur et aux vaisseaux (artères et veines), à la prévention ainsi qu’au traitement des anomalies et des maladies qui l’affectent : hypertension artérielle, insuffisance cardiaque, troubles du rythme cardiaque, angine de poitrine, athérosclérose …",
              },
              {
                "id": 2,
                "category": 0,
                "name": "Cardiologie du sport",
                "pathImg": "specialities/cardiologie_du_sport-cabinet_de_cardiologie_atlanticoeur.png",
                "description": "La cardiologie adulte s’intéresse à l’appareil cardiovasculaire, c’est-à-dire au cœur et aux vaisseaux (artères et veines), à la prévention ainsi qu’au traitement des anomalies et des maladies qui l’affectent : hypertension artérielle, insuffisance cardiaque, troubles du rythme cardiaque, angine de poitrine, athérosclérose …",
              },
              {
                "id": 3,
                "category": 1,
                "name": "Angiologie",
                "pathImg": "specialities/angiologie-cabinet_de_cardiologie_atlanticoeur.png",
                "description": "A côté de la Cardiologie, dons le domaine d’exercice est bien connu de tous, s’est développé une discipline s’intéressant aux vaisseaux. Le domaine du médecin vasculaire, ou angiologue, est celui des artères (artérite, anévrysmes, accidents vasculaires…), des veines (insuffisance, varices, phlébites), des capillaires (microcirculation), des lymphatiques. Son diagnostic notamment écho-Doppler est déterminant pour la prise en charge de ces maladies. L’essor des ultrasons de ces décennies a solidifié le socle de le discipline. \nCardiologie et médecine vasculaires sont des spécialités synergiques, les facteurs de risques, les pathologies sont intriquées. Aujourd’hui la Médecine Vasculaire a parcouru un grand chemin qui lui a donné une reconnaissance universitaire, et bénéficie d’une formation impliquant un parcours en partie commun avec la cardiologie. \nEn pratique, le médecin vasculaire exerce au carrefour de la médecine générale, de la cardiologie, de la chirurgie vasculaire, de la neurologie, de la médecine interne.",
              }
            ],
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
                    const [key] = entry;
                    doctor.specialities[key] = this.specialities[key];
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