import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDDIMJkHO5dGnTjx-wRikj0_-qu7_hFQt4",
  authDomain: "escalab-node-react.firebaseapp.com",
  projectId: "escalab-node-react",
  storageBucket: "escalab-node-react.appspot.com",
  messagingSenderId: "135581204752",
  appId: "1:135581204752:web:6f2563f85053d0365be595"
}

const app = firebase.initializeApp(firebaseConfig)

export default app