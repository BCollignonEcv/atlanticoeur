import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const API = new ApiService();

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})