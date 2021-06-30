<template>
  <div class="home page wrapper">
    <div class="l_container">
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
    </div>
  </div>
</template>

<script>

import Specialities from "@/components/Specialities"

export default {
  name: 'Home',
  components: {
    "Specialities": Specialities
  }

}
</script>

<style lang="scss" scoped>
  .l_container{
    &>*{
      flex: 1;
    }
  }
</style>
