import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAK18IdiyMufb84hgMAdA6boqCAMwTz8Ps",
    authDomain: "reactjs-50879.firebaseapp.com",
    databaseURL: "https://reactjs-50879.firebaseio.com",
    projectId: "reactjs-50879",
    storageBucket: "reactjs-50879.appspot.com",
    messagingSenderId: "263918750514",
    appId: "1:263918750514:web:e27323aec6f28e5a0fa52b",
    measurementId: "G-JY3EWNG423"
};
// Initialize Firebase
firebase.initializeApp(config);
export default firebase