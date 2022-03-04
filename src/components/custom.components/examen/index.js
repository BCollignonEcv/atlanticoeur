import { defineCustomElement } from 'vue'
import examen from "./Examen.vue"
import examens from "./Examens.vue"

const Examen = defineCustomElement(examen)
const Examens = defineCustomElement(examens)

export {
    Examen, Examens
}
