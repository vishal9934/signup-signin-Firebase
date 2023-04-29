import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAEuHLF2pneMyVetRyravN309poTxnmChs",
  authDomain: "web-project-21ad0.firebaseapp.com",
  projectId: "web-project-21ad0",
  storageBucket: "web-project-21ad0.appspot.com",
  messagingSenderId: "506975307118",
  appId: "1:506975307118:web:6cbed193e5dfcb38b46d7f",
  databaseURL:"https://web-project-21ad0-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);