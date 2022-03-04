import { defineCustomElement } from 'vue'

import header from "./Header.vue"
import footer from "./Footer.vue"
import footerOverlay from "./FooterOverlay.vue"

const Header = defineCustomElement(header)
const Footer = defineCustomElement(footer)
const FooterOverlay = defineCustomElement(footerOverlay)

export {
    Header, Footer, FooterOverlay
}
