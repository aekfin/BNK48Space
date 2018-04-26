import * as firebase from 'firebase'

if (!firebase.apps.length) {
  var config = {
    apiKey: 'AIzaSyAwn4VVMC_bCU_m0dnEkFS3dYRUOWRj0HY',
    authDomain: 'bnk48space.firebaseapp.com',
    databaseURL: 'https://bnk48space.firebaseio.com',
    projectId: 'bnk48space',
    storageBucket: 'bnk48space.appspot.com',
    messagingSenderId: '301063796282'
  }
  firebase.initializeApp(config)
}
