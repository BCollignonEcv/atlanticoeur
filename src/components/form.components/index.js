import { defineCustomElement } from 'vue'
import button from "./Button.vue"
import select from "./Select.vue"
import cta from "./Cta.vue"

const Button = defineCustomElement(button)
const Select = defineCustomElement(select)
const Cta = defineCustomElement(cta)

export {
    Button, Select, Cta
}
