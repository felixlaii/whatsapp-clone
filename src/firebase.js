import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAuLSVJxQSdgabcBnt82HdvY7W5_Mqv1JY",
    authDomain: "whatsapp-clone-73e99.firebaseapp.com",
    projectId: "whatsapp-clone-73e99",
    storageBucket: "whatsapp-clone-73e99.appspot.com",
    messagingSenderId: "858214151988",
    appId: "1:858214151988:web:6e380b511341f6692d9761",
    measurementId: "G-B1YT8NF9K5"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()

  const db = app.firestore()

  const googleProvider = new firebase.auth.GoogleAuthProvider()

  export { auth, googleProvider }

  export default db;