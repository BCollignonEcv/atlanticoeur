import { defineCustomElement } from 'vue'
import doctorCard from "./DoctorCard.vue"
import doctorCards from "./DoctorCards.vue"
import doctorDescription from "./DoctorDescription.vue"
import doctorDescriptions from "./DoctorDescriptions.vue"

const DoctorCard = defineCustomElement(doctorCard)
const DoctorCards = defineCustomElement(doctorCards)
const DoctorDescription = defineCustomElement(doctorDescription)
const DoctorDescriptions = defineCustomElement(doctorDescriptions)

export {
    DoctorCard, DoctorCards, DoctorDescription, DoctorDescriptions
}
