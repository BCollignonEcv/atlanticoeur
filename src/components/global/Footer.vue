<template>
    <div>
        <div class="l_container wrapper-content">
            <div class="footer-item">
                <nav>
                    <ul>
                        <li class="item-title"><h5>Architecture du site</h5></li>
                        <li class="link"><router-link to="/" @click="scrollToTop">Accueil</router-link></li>
                        <li class="link"><router-link to="/praticiens" @click="scrollToTop">Les praticiens</router-link></li>
                        <li class="link"><router-link to="/links" @click="scrollToTop">Les liens utiles</router-link></li>
                        <li class="link"><router-link to="/links" @click="scrollToTop">Mentions legales</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-item">
                <ul>
                    <li class="item-title"><h5>Le cabinet</h5></li>
                    <li><p>SCM Atlanticoeur</p></li>
                    <li>
                        <p>Cabinet de l'Atlantique</p><br>
                        <p>26 rue Moulin des justices</p><p>17138 Puilboreau</p>
                    </li>
                </ul>
            </div>
            <div class="footer-item">
                <ul>
                    <li class="item-title"><h5>Nous contacter</h5></li>
                    <li class="link"><a href="tel:+33546410753">Tél : +33 5 46 41 07 53</a></li>
                    <li class="link"><a href="mailto:contact%40atlanticoeur.fr">Mail : contact@atlanticoeur.fr</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <ul>
                    <li class="item-title"><h5>Crédits <span style="float: right">2021</span></h5></li>
                    <li class="link"><a target="_blank" rel="noopener" href="https://www.collignonbaptiste.com">Dev. : Collignon Baptiste</a></li>
                    <li class="link"><a target="_blank" rel="noopener" href="https://www.enzonicolas.eu">Design : Nicolas Enzo</a></li>
                    <li><br></li>
                    <li><p>@ 2021, SCM Atlanticoeur</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            page: [],
            contact: []
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
  }
}
</script>

<style lang="scss">
    footer{
        width: 100%;
        background-color: $color-grey-3;
        padding-top: 7.2rem;
        padding-bottom: 7.2rem;
        
        .l_container{
            padding-bottom: 7.8vh;
            &>*{
                flex: 1;
                padding-right: 2.4rem
            }

            li{
                padding: .4rem 0;
                border-top: 1px solid $color-grey-1;

                &:last-of-type{
                    border-bottom: 1px solid $color-grey-1;
                }

                p{
                    @include font-bold;
                }

                a{
                    @include font-bold;
                    transition: .5s ease;
                }

                &.link:hover{
                    @include hoverLink;
                }
            }

            li.item-title{
                border-top: none;
                margin-bottom: 4.8rem;
                h5{
                    @include font-size-4;
                    @include font-bold;
                    margin-block-start: 0;
                    margin-block-end: 0;
                }
            }
        }
    }
</style>