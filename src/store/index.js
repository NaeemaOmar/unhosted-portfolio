import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    testimonialsArray: null,
  },
  getters: {
  },
  mutations: {
    setTestimonialsInfo(state, theInfo){
      state.testimonialsArray = theInfo
    }
  },
  actions: {
    getTestimonials({commit}){
      try{
        axios('https://naeemaomar.github.io/FinalVueEompData/').then(
          theData => {
            console.log("This is the axios of the store. Below is the theData.data.Testimonials variable (hopefully)")
            console.log(theData.data.Testimonials)
            commit('setTestimonialsInfo', theData.data.Testimonials)
          }
        )
      } catch(error){
        console.log(`The following error occured while trying to get the testimonials data in the store: ${error}`)
      }
    }
  },
  modules: {
  }
})
