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


export interface ProductData {
  id: string;
  name: string;
  colors: string[];
  type: string;
  origin: string;
  img: string;
}

export interface QuoteProduct {
  id: string;
  image: string;
  title: string;
  height: number;
  width: number;
  depth: number;
  quantity: number;
}

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

async function getData(origin: string | null, type: string | null): Promise<ProductData[]> {
  const q = query(collection(store, "products"), where("origin", "==", origin), where("type", "==", type));
  const prodSnapshot = await getDocs(q);
  const productList = prodSnapshot.docs.map((doc) => {
    const product: ProductData = doc.data() as ProductData;
    product.id = doc.id;
    return product;
  });
  return productList;
}

async function getProduct(id: string) {
  const prod = doc(store, "products", id);
  const prodSnapshot = await getDoc(prod);
  const product = prodSnapshot.data() as ProductData;
  product.id = prodSnapshot.id;
  return product;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

async function addForQuote(
  name: string,
  phone: string,
  email: string,
  message: string,
  location: string,
  products: QuoteProduct[]
) {
  const requirement = await addDoc(collection(store, "forQuote"), {
    name, phone, email, message, location,
  });

  const data = products.map(product => addDoc(collection(store, "forQuote", requirement.id, "products"), { ...product }));
  const result = await Promise.allSettled(data);
  console.log(result);
  return result;
}

export { onContactUs, getData, store, getProduct, useQuery, addForQuote };
