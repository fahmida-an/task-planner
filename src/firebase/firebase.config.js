// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwBKUVMfxXJD5TOUgu1hZIt-byZOBNRLU",
  authDomain: "task-planner-268b0.firebaseapp.com",
  projectId: "task-planner-268b0",
  storageBucket: "task-planner-268b0.appspot.com",
  messagingSenderId: "317886985993",
  appId: "1:317886985993:web:c8cd9c3c1e170d93a0c5d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
