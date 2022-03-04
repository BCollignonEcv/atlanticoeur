import { defineCustomElement } from 'vue'
import specility from "./Specility.vue"
import specilities from "./Specilities.vue"
import specilitySlide from "./SpecilitySlide.vue"

const Specility = defineCustomElement(specility)
const Specilities = defineCustomElement(specilities)
const SpecilitySlide = defineCustomElement(specilitySlide)

export {
    Specility, Specilities, SpecilitySlide
}
