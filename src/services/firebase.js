import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGTlLYl9uEkgRBU4U_nsO2dUkUEVSkA_M",
  authDomain: "myapp-999b3.firebaseapp.com",
  databaseURL: "https://myapp-999b3-default-rtdb.firebaseio.com",
  projectId: "myapp-999b3",
  storageBucket: "myapp-999b3.appspot.com",
  messagingSenderId: "175802735105",
  appId: "1:175802735105:web:070ae99fee16388284fe00"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;