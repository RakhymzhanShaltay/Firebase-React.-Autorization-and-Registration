import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1w6vkR_SFY5hKm1F5n4QlnWraCjcguh0",
  authDomain: "shaltayrakhymzhan.firebaseapp.com",
  projectId: "shaltayrakhymzhan",
  storageBucket: "shaltayrakhymzhan.firebasestorage.app",
  messagingSenderId: "648622411788",
  appId: "1:648622411788:web:20c009f4ef587048f25e29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
