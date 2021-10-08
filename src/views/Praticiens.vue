<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les praticiens du cabinet <br> SCM Atlanticœur</h1>
    </div>
    <doctors-card-list :data-doctors="doctorsSpe" :type-card="'big'"/>
    <doctors-description-list :selected-item="selected" :data-doctors="doctorsSpe"/>
    <div class="wrapper-content">
      <h2>Les spécialités du cabinet <br> SCM Atlanticœur</h2>
    </div>
  </div>
</template>

<script>

import DoctorCards from "@/components/doctor/DoctorCards"
import DoctorDescriptions from "@/components/doctor/DoctorDescriptions"

export default {
  name: 'Praticiens',
  components: {
    'doctors-card-list': DoctorCards,
    'doctors-description-list': DoctorDescriptions
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
                "specialities": [0,1],
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
                  "doctolib": "http://google.fr",
                  "specialities": [2,0],
                  "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
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
                  "doctolib": "http://google.fr",
                  "specialities": [0,1],
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
                  "doctolib": "http://google.fr",
                  "specialities": [0,1],
                  "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
                  "vitalCard": "Acceptée",
                  "tiersPayant": "Sécurité Sociale",
                  "diplomes": ["Ancien interne","Chef de clinique assistant des hopitaux de Toulouse","DES pathologie cardiovasculaire","DU cardiologie du sport","DU médecines subaquatique"],
                  "RPPS": 10003840369
              }
            ],
            specialities: [
              {
                "name": "Cardiologie adulte",
                "description": "hello description"
              },
              {
                "name": "Cardiologie du sport",
                "description": "hello description"
              },
              {
                "name": "Angiologie",
                "description": "hello description"
              },
              {
                "name": "Cardiologie adulte",
                "description": "hello description"
              },
            ],
            doctorsSpe: [],
            selected: 1
        }
    },
     methods: {

       // Change speciality index by content
        includeSpecialities(){
            this.doctors.forEach((doctor, doctorIndex) => {
                Object.entries(doctor.specialities).forEach(entry => {
                    const [key, value] = entry;
                    doctor.specialities[key] = this.specialities[value]
                });
                this.doctorsSpe.push(doctor);
                console.log(doctorIndex, doctor)
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