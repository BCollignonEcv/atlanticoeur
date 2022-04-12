<template>
    <Header />
    <main>
    <router-view v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeIn" 
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Modal v-if="appStore.hasModal">
      <div class="wrapper-section" v-if="appStore.isModal('doctors')">
          <DoctorCards :type-card="'small'" ></DoctorCards>
      </div>
      <Doctolib v-if="appStore.isModal('doctolib')"></Doctolib>
      <Contact v-if="appStore.isModal('contact')"></Contact>
    </Modal>
    
    </main>
    <Footer />
</template>

<script>
import { Header, Footer } from '@/components/global.components'
import { Contact, Doctolib } from "@/components/custom.components"
import { Modal } from "@/components/layer.components"
import { useAppStore } from '@/stores/App.store'
import { DoctorCards } from '@/components/custom.components'


export default {
  name: 'App',
  components: {
    Header, Footer,
    Contact, Doctolib,
    Modal,
    DoctorCards
  },
  setup() {
    const appStore = useAppStore();
    return { appStore }
  },
}
</script>
<style lang="scss">
  .page{
    min-height: 100vh;
  }
</style>
