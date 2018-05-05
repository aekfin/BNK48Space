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
      },
      storage () {
        return firebase.storage().ref()
      },
      authGoogle () {
        return new firebase.auth.GoogleAuthProvider()
      },
      authFacebook () {
        return new firebase.auth.FacebookAuthProvider()
      },
      authGithub () {
        return new firebase.auth.GithubAuthProvider()
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
