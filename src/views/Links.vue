<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les différents liens utiles <br> recommandés</h1>
    </div>
    <div>
      <div class="postGrid">
        <div class="postGrid-header">
          <p>Source du contenu</p>
          <p>Typologie</p>
          <p>></p>
        </div>
        <div class="postGrid-content">
          <div class="line">
            <p>Contenu 1</p>
            <p>Lien</p>
            <p>2019</p>
          </div>
          <div class="line">
            <p>Contenu 1</p>
            <p>Lien</p>
            <p>2019</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'links',
}
</script>

<style lang="scss" scoped>
  .links{
    p{
        color: $color-primary;
    }
  } 

  .postGrid{
    width: 100%;

    .postGrid-header{
      border-top: 1px solid $color-grey-6;
      border-bottom: 1px solid $color-grey-6;
      padding: $font-extraSmall 0;
    }

    .postGrid-content{
      
    }

    .line, .postGrid-header{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      border-top: 1px solid $color-grey-6;

      &:nth-child(1){
        border-top: none;
      }

      p{
        text-align: left;
        
        &:nth-child(3){
          text-align: right;
        }
      }
    }
  }
</style>