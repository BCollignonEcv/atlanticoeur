import { defineCustomElement } from 'vue'
import cabinetDescription from "./CabinetDescription.vue"
import cabinetSlide from "./CabinetSlide.vue"

const CabinetDescription = defineCustomElement(cabinetDescription)
const CabinetSlide = defineCustomElement(cabinetSlide)

export {
    CabinetDescription, CabinetSlide
}
