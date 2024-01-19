import {initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyB406sHzIQh7Ni89kOpcbqqoSGYxq5Rd3E",
    authDomain: "expense-tracker-a5765.firebaseapp.com",
    projectId: "expense-tracker-a5765",
    storageBucket: "expense-tracker-a5765.appspot.com",
    messagingSenderId: "906480685495",
    appId: "1:906480685495:web:d00d95a2fb49b70cdc1832",
databaseURL:"https://expense-tracker-a5765-default-rtdb.firebaseio.com",
};
  
  export const app = initializeApp(firebaseConfig);