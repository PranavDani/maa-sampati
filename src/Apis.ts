// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1IBSJlqo6UwSQdVKmI1-_duHJKz8RKfU",
  authDomain: "edjwjj.firebaseapp.com",
  projectId: "edjwjj",
  storageBucket: "edjwjj.appspot.com",
  messagingSenderId: "801713437383",
  appId: "1:801713437383:web:e617ed65d2947a38cd5ce2",
  measurementId: "G-6ZQ6LH57NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);

async function onContactUs(
  name: string,
  phone: string,
  email: string,
  message: string
) {
  const docRef = await addDoc(collection(store, "contactUs"), {
    name,
    phone,
    email,
    message,
  });

  console.log(docRef);

  return docRef;
}

async function getData(origin: string|null, type: string|null) {
  const q = query(collection(store, "products"), where("origin", "==", origin), where("type", "==", type));
  const prodSnapshot = await getDocs(q);
  const productList = prodSnapshot.docs.map((doc) => doc.data());
  return productList;
}

async function getProduct(id: string) {
  const prod = doc(store, "products", id);
  const prodSnapshot = await getDoc(prod);
  const productList = prodSnapshot.data();
  console.log(productList);
  return productList;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export { onContactUs, getData, store, getProduct, useQuery };
