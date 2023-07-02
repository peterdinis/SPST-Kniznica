import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

/* TODO: Later add this to env variables */

const firebaseConfig = {
  apiKey: "AIzaSyDBH5tWhwesCuPQDrYhu1LaOOkSq8UApVY",
  authDomain: "spst-kniznica-fbb5f.firebaseapp.com",
  projectId: "spst-kniznica-fbb5f",
  storageBucket: "spst-kniznica-fbb5f.appspot.com",
  messagingSenderId: "229258796612",
  appId: "1:229258796612:web:4a6555728bc385e2d36611",
  measurementId: "G-2CYBEY9FWM",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
