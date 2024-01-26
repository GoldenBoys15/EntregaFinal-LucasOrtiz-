import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK3dgyaAr3kxNnIipSTqRWM_PMNZtZi1Q",
  authDomain: "eccomerce-7e6a1.firebaseapp.com",
  projectId: "eccomerce-7e6a1",
  storageBucket: "eccomerce-7e6a1.appspot.com",
  messagingSenderId: "323485746566",
  appId: "1:323485746566:web:37b3e201c54f4f447a9807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
      </ChakraProvider>
)

