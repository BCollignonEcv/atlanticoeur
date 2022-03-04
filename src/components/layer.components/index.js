import { defineCustomElement } from 'vue'

import collapse from "./Collapse.vue"
import modal from "./Modal.vue"
import section from "./Section.vue"
import slider from "./Slider.vue"

const Collapse = defineCustomElement(collapse)
const Modal = defineCustomElement(modal)
const Section = defineCustomElement(section)
const Slider = defineCustomElement(slider)

export {
    Collapse, Modal, Section, Slider
}