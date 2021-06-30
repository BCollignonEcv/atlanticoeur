<template>
    <div id="nav">
      <nav class="l_container">
          <router-link to="/">Accueil</router-link>
          <router-link to="/praticiens">Les praticiens</router-link>
          <router-link to="/links">Les liens utiles</router-link>
      </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

#nav {
  margin: 1.2rem auto 9.2rem auto;
  padding: 2.4rem;
  width: 61.25%;  

  a {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.6rem;
    flex: 1;
    padding: .8rem;
    font-weight: bold;
    display: inline-block;
    position: relative;

    &:after{
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      top: 0;
      left: 0;
      background-color: var(--color-primary);
      transform-origin: top right;
      transition: transform 0.25s ease-out;
    }

    &:hover{
      color: var(--color-primary);
    }

    &:hover:after{
      transform: scaleX(1);
      transform-origin: top left;
    }

    &.router-link-exact-active{
      color: var(--color-primary);

      &:after {
        transform: scaleX(1);
        transition: 0;
      }
    }
  }
}
</style>