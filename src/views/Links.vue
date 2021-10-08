<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les différents liens utiles <br> recommandés</h1>
    </div>
    <div>
      <grid :data-links="links"/>
    </div>
  </div>
</template>

<script>

import Grid from "@/components/grid/Grid"

export default {
  name: 'links',
  components: {
    'grid': Grid,
  },
  data() {
        return {
            links: [
              {
                "header": {
                    "title": "Source de contenu", 
                    "link": "Typologie"
                  },
                  "content": [
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    {
                      "title": "Fédération francaise de Cardiologie",
                      "link": "Lien 1",
                      "date": "2020"
                    },
                    ]
                  }
            ],
            open: 1
        }
    },
}
</script>

<style lang="scss" scoped>
</style>