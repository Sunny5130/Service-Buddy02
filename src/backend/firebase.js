import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {doc, getFirestore, increment, updateDoc} from "firebase/firestore";
import { arrayUnion, setDoc, getDocs, getDoc, addDoc, collection } from "firebase/firestore"; 
import {  uploadBytes, getStorage, ref, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyABbxjbrTL29Lay2y8sf3QMV3lzNOe_89k",
  authDomain: "voteauth-ad8a9.firebaseapp.com",
  projectId: "voteauth-ad8a9",
  storageBucket: "voteauth-ad8a9.appspot.com",
  messagingSenderId: "911932926339",
  appId: "1:911932926339:web:3c8d315bf5edb49ca02eb6",
  measurementId: "G-G4KZFMM6CS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function updateData( data ){
    const db = getFirestore(app);
    const docRef = doc(db, "postDataAllUsers", "aryan");
    await updateDoc(docRef, {
        services : arrayUnion(data)
    });
}

async function downloadData(){
  const db = getFirestore(app);
  const docRef = doc(db, "postDataAllUsers", "aryan");
  const docSnap = await getDoc(docRef);
  const data = docSnap.data().services;
  return data;
}


async function uploadUserImage(image){
  const storage = getStorage();
  const storageRef = ref(storage, image.name);
  await uploadBytes(storageRef, image)
  const res = await getDownloadURL(storageRef);
  return res;
}


//update("79PgfMpXOxk8lsgtj7yp", 4);

export { 
  uploadUserImage, 
  downloadData, 
  updateData
};