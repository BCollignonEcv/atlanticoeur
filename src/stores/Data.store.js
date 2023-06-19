import { defineStore } from 'pinia'
// import ApiService from '@/services/api.service.js'

// const API = new ApiService();

export const useDataStore = defineStore('data', {
    state: () => {
        return {
            doctors: [{
                    "id": 0,
                    "firstName": "Paul",
                    "lastName": "Jaillais",
                    "pathImg": "doctors/cardiologue_paul_jaillais-cabinet_de_cardiologie-atlanticoeur.jpg",
                    "doctorName": "Cardiologue",
                    "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/paul-jaillais?locale=fr",
                    "specialities": [0, 2],
                    "conventionType": 1,
                    "presentation": "Le docteur Paul Jaillais consulte à la Clinique de l'Atlantique à Puilboreau. Il prend en charge l'ensemble de la pathologie cardiaque mais aussi la cardiologie préventive du sportif, réalise les examens non invasifs, électrocardiogrammes, échographies, épreuves d’effort, enregistrements rythmiques et tensionnels nécessaires aux diagnostics, au traitement et au suivi. Pour la consultation, pensez à prendre vos dernières analyses biologiques et vos éventuels documents cardiologiques antérieurs.",
                    "vitalCard": "Acceptée",
                    "tiersPayant": "Sécurité Sociale",
                    "diplomes": ["Ancien interne", "Chef de clinique assistant des hopitaux de Toulouse", "DES pathologie cardiovasculaire", "DU cardiologie du sport", "DU médecines subaquatique"],
                    "RPPS": 10003840369
                },
                {
                    "id": 1,
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
                    "id": 2,
                    "firstName": "Pauline",
                    "lastName": "Roy",
                    "pathImg": "doctors/cardiologue_pauline_roy-cabinet_de_cardiologie-atlanticoeur.jpg",
                    "doctorName": "Cardiologue",
                    "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/pauline-roy-puilboreau?locale=fr",
                    "specialities": [0, 1],
                    "conventionType": "2 avec Optam",
                    "presentation": "Le cardiologue est spécialiste du cœur et de ses pathologies ainsi que des problèmes vasculaires. Vous pouvez le consulter en cas d'insuffisance cardiaque, de péricardite ou plus généralement d'ssoufflements anormaux, de palpitations ou encore de douleurs thoraciques",
                    "vitalCard": "Acceptée",
                    "tiersPayant": "Sécurité Sociale",
                    "diplomes": [
                        "D.U. Cardiologie pédiatrique - Université René Descartes - Paris 5", 
                        "D.E.S. Cardiologie et maladies vasculaires - Faculté de médecine de Poitiers",
                        "D.I.U. Imagerie cardiaque en coupes - Faculté de médecine de Poitiers",
                        "D.I.U. Échocardiographie - Faculté de médecine de Poitiers",
                        "D.I.U. Système cardiovasculaire et sport - Faculté de médecine de Poitiers",
                        "Parcours sommeil: syndrome d'apnée hypopnées obstructives du sommeil"
                    ],
                    "RPPS": 10100386696
                },
                {
                    "id": 3,
                    "firstName": "Edouard",
                    "lastName": "Majou",
                    "pathImg": "doctors/cardiologue_edouard_majou-cabinet_de_cardiologie-atlanticoeur.jpg",
                    "doctorName": "Cardiologue",
                    "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/edouard-majou?locale=fr",
                    "specialities": [0, 1],
                    "conventionType": 1,
                    "presentation": "Le cardiologue est spécialiste du cœur et de ses pathologies ainsi que des problèmes vasculaires. Vous pouvez le consulter en cas d'insuffisance cardiaque, de péricardite ou plus généralement d’essoufflements anormaux, de palpitations ou encore de douleurs thoraciques.",
                    "vitalCard": "Acceptée",
                    "tiersPayant": "Sécurité Sociale",
                    "diplomes": ["DES de pathologie cardio vasculaire - CHU de tours", ],
                    "RPPS": 10002084035
                },
                {
                    "id": 4,
                    "firstName": "Sophie",
                    "lastName": "Taillandier",
                    "pathImg": "doctors/cardiologue_sophie_taillandier-cabinet_de_cardiologie-atlanticoeur.jpg",
                    "doctorName": "Cardiologue",
                    "doctolib": "https://partners.doctolib.fr/cardiologue/puilboreau/sophie-taillandier?locale=fr",
                    "specialities": [0],
                    "conventionType": "2 avec Optam",
                    "presentation": "",
                    "vitalCard": "Acceptée",
                    "tiersPayant": "Sécurité Sociale",
                    "diplomes": ["Diplôme d'État de docteur en médecine - Faculté de médecine de Tours", ],
                    "RPPS": 10100349561
                },
            ],
            specialities: [{
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
                    "description": "La cardiologie pédiatrique est la discipline médicale qui s'intéresse à l'étude des malformations cardiaques congénitales, des cardiopathies acquises et des anomalies de la circulation systémique ( générale)  et de la circulation pulmonaire, de même qu'à la prévention, au diagnostic et à la prise en charge de ces situations chez le nouveau né et l'enfant. \nEn pratique de ville les enfants adressés en consultation sont porteurs d'un souffle cardiaque à explorer ( rechercher d'anomalie de valve par exemple ou de malformation cardiaque) , d'un retard de croissance qui doit faire rechercher une malformation cardiaque, d'infections bronchiques ou ORL à répétitions. On effectue également le suivi des enfants opérés d'une malformation cardiaque. ",
                },
                {
                    "id": 2,
                    "category": 0,
                    "name": "Cardiologie du sport",
                    "pathImg": "specialities/cardiologie_du_sport-cabinet_de_cardiologie_atlanticoeur.png",
                    "description": "La cardiologie du sport à travers l'examen du pratiquant et la réalisation d'examens orientés permet d'apprécier: \n- Les spécificités physiologiques de l’adaptation du système cardiovasculaire lié à la pratique sportive \n- Dépister des maladies cardiovasculaires chez le pratiquant d’activité physique et sportive amateur et de Haut niveau \n- Statuer sur l’aptitude à la pratique sportive des patients atteints ou suspects d’une maladie cardiovasculaire.",
                },
                {
                    "id": 3,
                    "category": 1,
                    "name": "Angiologie",
                    "pathImg": "specialities/angiologie-cabinet_de_cardiologie_atlanticoeur.png",
                    "description": "A côté de la Cardiologie, dons le domaine d’exercice est bien connu de tous, s’est développé une discipline s’intéressant aux vaisseaux. Le domaine du médecin vasculaire, ou angiologue, est celui des artères (artérite, anévrysmes, accidents vasculaires…), des veines (insuffisance, varices, phlébites), des capillaires (microcirculation), des lymphatiques. Son diagnostic notamment écho-Doppler est déterminant pour la prise en charge de ces maladies. L’essor des ultrasons de ces décennies a solidifié le socle de le discipline. \nCardiologie et médecine vasculaires sont des spécialités synergiques, les facteurs de risques, les pathologies sont intriquées. Aujourd’hui la Médecine Vasculaire a parcouru un grand chemin qui lui a donné une reconnaissance universitaire, et bénéficie d’une formation impliquant un parcours en partie commun avec la cardiologie. \nEn pratique, le médecin vasculaire exerce au carrefour de la médecine générale, de la cardiologie, de la chirurgie vasculaire, de la neurologie, de la médecine interne.",
                }
            ],
            company: {
                "name": "Clinique de l'Atlantique",
                "description": ["Nous sommes ravis de vous accueillir dans notre cabinet de cardiologie et d'angiologie Atlanticoeur situé à la Rochelle. Notre equipe regroupe cardiologues et angiologues pour assurer le dépistage ou le traitement d'éventuelles maladies cardiaques et vasculaires.", "Vous trouverez une brève présentation de nos cardiologues, les modalités de prises de rendez-vous, des images et des plans pour localiser plus facilement nos cabinets. \n Enfin, vous trouverez des liens et des adresses vers d’autres organismes de santé qui pourront vous être utiles dans votre prise en charge."],
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
                    "hours": {
                        0: '8:30',
                        1: '19:00'
                    },
                },
            },
            photos: [{
                    "id": 0,
                    "name": "Acceuil",
                    "pathImg": "cabinets/acceuil_cabinet_de_cardiologie_atlanticoeur.jpg",
                },
                {
                    "id": 1,
                    "name": "Salle d'attente",
                    "pathImg": "cabinets/salle_attente_2_cabinet_de_cardiologie_atlanticoeur.jpg",
                },
                {
                    "id": 2,
                    "name": "Cabinet Jaillais",
                    "pathImg": "cabinets/docteur_jaillais_2_cabinet_de_cardiologie_atlanticoeur.jpg",
                }
            ],
            examens: [{
                "id": 1,
                "name": "Electrocardiogramme",
                "description": "Autrement appelé ECG, est un examen qui étudie le fonctionnement du cœur en mesurant son activité électrique."
            }, {
                "id": 2,
                "name": "Test effort",
                "description": "Aussi appelé épreuve d’effort, est un examen permettant de détecter de possibles anomalies du coeur au cours d'un exercice physique soutenu."
            }, {
                "id": 3,
                "name": "Echocardiographie",
                "description": "Est un examen permettant en outre d’acquérir aisément des images tridimensionnelles du cœur et des valves."
            }, {
                "id": 4,
                "name": "Holter Rythmique",
                "description": "Le 'Holter Rythmique' consiste à réaliser un enregistrement électrocardiogramme de manière continue sur une période de 24 heures."
            }, {
                "id": 5,
                "name": "Holter Tensionnel",
                "description": "A la différence du 'Holter Rythmique', le 'Holter Tensionnel' consiste à réaliser un enregistrement précis de la tension artérielle de manière continue sur une période de 24 heures."
            }, {
                "id": 6,
                "name": "Controle pacemaker",
                "description": "Cela consiste à contrôler le bon fonctionnement la durée de vie de la pile, la bonne intégrité des sondes, la bonne programmation du pacemaker."
            }],
            links: {
                "header": {
                    "title": "Source de contenu",
                    "link": "Typologie"
                },
                "content": [{
                        "title": "macirculation.com",
                        "link": "https://www.macirculation.com/",
                        "category": "Angiologie",
                        "date": "2022"
                    },
                    {
                        "title": "Fédération francaise de Cardiologie",
                        "link": "https://www.fedecardio.org/",
                        "category": "Cardiologie",
                        "date": "2022"
                    }
                ]
            },
            activeDoctor: null,
            activeSpeciality: null,
        }
    },
    getters: {
        hasActiveDoctor: (state) => {
            return state.activeDoctor != null ? true : false;
        },
        hasActiveSpeciality: (state) => {
            return state.activeSpeciality != null ? true : false;
        },
        getActiveDoctor: (state) => {
            return state.doctors[state.activeDoctor];
        },
        getActiveSpeciality: (state) => {
            return state.specialities[state.activeSpeciality];
        },
        getDoctors: (state) => {
            return state.doctors;
        },
        getDoctorsWithSpecialities: (state) => {
            let doctorWithSpecilities = state.doctors;
            doctorWithSpecilities.forEach((doctor) => {
                Object.entries(doctor.specialities).forEach(speciality => {
                    const [key, value] = speciality;
                    doctor.specialities[key] = state.specialities[value];
                });
            });
            return doctorWithSpecilities;
        },
        getSpecialities: (state) => {
            return state.specialities;
        },
        getCompany: (state) => {
            return state.company;
        },
        getPhotos: (state) => {
            return state.photos;
        },
        getExamens: (state) => {
            return state.examens;
        },
        getLinks: (state) => {
            return state.links;
        }
    },
    actions: {
        selectDoctor(id) {
            this.activeDoctor = id;
        },
        selectSpeciality(id) {
            this.activeSpeciality = id;
        },
        resetActiveDoctor() {
            this.activeDoctor = null;
        },
        resetActiveSpeciality() {
            this.activeSpeciality = null;
        }
    },
})