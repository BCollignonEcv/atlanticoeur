<template>
  <div class="home page wrapper-content">
    <section class="l_container">
      <div class="l_leftSide">
        <h1>Cabinet de cardiologie <br>SCM Atlanticoeur</h1>
        <div class="l_container">
          <p>Puilboreau</p>
          <p>Clinique de l'Atlantique <br> 26 rue Moulin des justices</p>
        </div>
      </div>
      <div class="l_rightSide">
        <Specialities />
      </div>
    </section>
    <section>
      <h2>Les différents praticiens du cabinet</h2>
    </section>
    <section>
      <h2>Les examens réalisés du cabinet</h2>
    </section>
    <section>
      <h2>La clinique atlanticoeur</h2>
    </section>
  </div>
</template>

<script>

import Specialities from "@/components/speciality/Specialities"

export default {
  name: 'Home',
  components: {
    "Specialities": Specialities
  },
}
</script>

<style lang="scss" scoped>
  .l_container{
    &>*{
      flex: 1;
    }
  }
</style>
