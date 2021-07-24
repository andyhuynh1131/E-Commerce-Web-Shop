import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyCajdHcHuvIeaIfsLroQbfhYNrMaNoZvPU",
    authDomain: "e-commerce-shop-1d949.firebaseapp.com",
    projectId: "e-commerce-shop-1d949",
    storageBucket: "e-commerce-shop-1d949.appspot.com",
    messagingSenderId: "1060096991033",
    appId: "1:1060096991033:web:59d80a1456a468a6c392e8",
    measurementId: "G-8EHTMJYNXH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;