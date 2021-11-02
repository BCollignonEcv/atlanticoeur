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
    <section-component :title="'Les différents praticiens du cabinet'" :sectionSetting="['grey', 'sectionPadding']">
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
              "specialities": [3],
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
              "googleMap": "https://maps.google.com/maps?q=26%20%20rue%20Moulin%20des%20justices%20%2017138%20%20Puilboreau&t=&z=13&ie=UTF8&iwloc=&output=embed",
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
        doctorsSpe: [],
    }
  },
  methods: {
       // Change speciality index by content
        includeSpecialities(){
            this.doctors.forEach((doctor) => {
                Object.entries(doctor.specialities).forEach(entry => {
                    const [key, value] = entry;
                    doctor.specialities[key] = this.specialities[value];
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
