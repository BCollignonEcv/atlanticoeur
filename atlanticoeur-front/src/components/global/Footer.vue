<template>
    <div id="footer">
        <div class="l_container wrapper">
            <div>
                <nav>
                    <ul>
                        <li class="li_title">Architecture du site</li>
                        <li>Accueil</li>
                        <li>Les praticiens</li>
                        <li>Les liens utiles</li>
                        <li>Mentions legales</li>
                    </ul>
                </nav>
            </div>
            <div>
                <ul>
                    <li class="li_title">Le cabinet</li>
                    <li>SCM Atlanticoeur</li>
                    <li>Cabinet de l'Atlantique</li>
                    <li>26 rue Moulin des justices <br> 17138 Puilboreau</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="li_title">Nous contacter</li>
                    <li>Tél : +33 5 46 41 07 53</li>
                    <li>Mail : contact@atlanticoeur.fr</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="li_title">Crédits - 2021</li>
                    <li>Dev : Collignon Baptiste</li>
                    <li>Design : Enzo Nicolas</li>
                    <li>@ 2021, SCM Atlanticoeur</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #footer{
        width: 100%;
        background-color: var(--color-grey-3);
        padding: 7.2rem 0;
        
        .l_container{
            &>*{
                flex: 1;
                padding-right: 2.4rem
            }

            li{
                padding: .4rem 0;
                border-top: 1px solid var(--color-grey-1);
            }
        }
    }
</style>