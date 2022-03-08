import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({ 
        modals: {
            contact: false,
            doctolib: false
        },
    }),
    getters: {
        hasModal(state){
            return Object.values(state.modals).some( value => value === true );
        },
        isModal(state){
            return (modal) => {
                if(modal in state.modals){
                    return state.modals[modal];
                }
            }
        }
    },
    actions: {
        showModal(modal){
            this.resetModal();
            if(modal in this.modals){
                this.modals[modal] = true;
            }
        },
        resetModal(){
            Object.keys(this.modals).forEach((modal) => {
                this.modals[modal] = false;
            })
        }
    },
})