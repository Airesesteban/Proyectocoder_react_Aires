import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC7YOhVYyWAAy1l3qMYWWCUEgLNH_NalI",
  authDomain: "react-coderhouse-87735.firebaseapp.com",
  projectId: "react-coderhouse-87735",
  storageBucket: "react-coderhouse-87735.appspot.com",
  messagingSenderId: "922951344800",
  appId: "1:922951344800:web:4e493bedfdf2f01a069fc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)
