import firebase from 'firebase'

const firebaseConfig = {
    // this is where your firebase config goes
    
        apiKey: "AIzaSyBVYwwxRxyUafbV5DoUosQDD_rGIBKxzQA",
        authDomain: "mern-fb-tan.firebaseapp.com",
        projectId: "mern-fb-tan",
        storageBucket: "mern-fb-tan.appspot.com",
        messagingSenderId: "317842865635",
        appId: "1:317842865635:web:4850b3b2e1aa7457aff4d6"
      
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db