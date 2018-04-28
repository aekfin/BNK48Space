import Vuex from 'vuex'
import firebase from './firebase'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
    },
    getters: {
      firebase () {
        return firebase
      },
      firestore () {
        var firestore = firebase.firestore()
        firestore.settings({timestampsInSnapshots: true})
        return firestore
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default store
