import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBPWENNcbHForxz13o3dysLzjJ1bydgmjE",
  authDomain: "login-f1906.firebaseapp.com",
  projectId: "login-f1906",
  storageBucket: "login-f1906.appspot.com",
  messagingSenderId: "326968046857",
  appId: "1:326968046857:web:63d542b3bb6b28cdb48fd8"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
export default fire;