<template>
    <div>
        <div class="l_container wrapper">
            <div class="footer-item">
                <nav>
                    <ul>
                        <li class="item-title"><h5>Architecture du site</h5></li>
                        <li><router-link to="/" @click="scrollToTop">Accueil</router-link></li>
                        <li><router-link to="/praticiens" @click="scrollToTop">Les praticiens</router-link></li>
                        <li><router-link to="/links" @click="scrollToTop">Les liens utiles</router-link></li>
                        <li>Mentions legales</li>
                    </ul>
                </nav>
            </div>
            <div class="footer-item">
                <ul>
                    <li class="item-title"><h5>Le cabinet</h5></li>
                    <li><p>SCM Atlanticoeur</p></li>
                    <li><p>Cabinet de l'Atlantique</p></li>
                    <li><p>26 rue Moulin des justices</p><p>17138 Puilboreau</p></li>
                </ul>
            </div>
            <div class="footer-item">
                <ul>
                    <li class="item-title"><h5>Nous contacter</h5></li>
                    <li><a href="tel:+33546410753">Tél : +33 5 46 41 07 53</a></li>
                    <li><a href="mailto:contact%40atlanticoeur.fr">Mail : contact@atlanticoeur.fr</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <ul>
                    <li class="item-title"><h5>Crédits - 2021</h5></li>
                    <li><a target="_blank" href="https://www.collignonbaptiste.com">Dev : Collignon Baptiste</a></li>
                    <li><a target="_blank" href="https://www.enzonicolas.eu">Design : Enzo Nicolas</a></li>
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
        @extend .wrapper-content;
        
        .l_container{
            padding-bottom: 15vh;
            &>*{
                flex: 1;
                padding-right: 2.4rem
            }

            li{
                padding: .4rem 0;
                border-top: 1px solid $color-grey-1;
                p{
                    font-weight: 700;
                }

                a{
                    font-weight: 700;
                    transition: 1s ease;
                }

                &:hover{
                    border-top: 1px solid $color-primary;
                    a{
                        padding-left: 1rem;
                        color: $color-primary;
                    }
                }
            }

            li.item-title{
                border-top: none;
                margin-bottom: 4.8rem;
                h5{
                    @extend .font-size-3;
                    font-weight: 700;
                }
            }

            nav{
                li{

                }
            }
        }
    }
</style>