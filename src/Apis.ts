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
  apiKey: "*****",
  authDomain: "*****",
  projectId: "*****",
  storageBucket: "*****",
  messagingSenderId: "*****",
  appId: "*****",
  measurementId: "*****",
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

function getProductQuery(color: string | null, origin: string | null, type: string | null, name: string | null) {
  if (name) {
    return query(collection(store, "products"), where("name", ">=", name?.toUpperCase()), where("name", "<=", name?.toLowerCase() + "\uf8ff"));
  }
  else if (color) {
    return query(collection(store, "products"), where("colors", "array-contains", color));
  }
  else if (origin) {
    return query(collection(store, "products"), where("origin", "==", origin.toLowerCase()));
  }
  else if (type) {
    return query(collection(store, "products"), where("type", "==", type.toLowerCase()));
  }
  else if (origin == null && type == null && name == null) {
    return query(collection(store, "products"));
  }
  else {
    return query(collection(store, "products"), where("origin", "==", origin), where("type", "==", type));
  }
}


async function getData(color: string | null, origin: string | null, type: string | null, name: string | null): Promise<ProductData[]> {
  const prodSnapshot = await getDocs(getProductQuery(color, origin, type, name));
  const productList = prodSnapshot.docs.map((doc) => {
    const product: ProductData = doc.data() as ProductData;
    product.id = doc.id;
    return product;
  });
  console.log(productList)
  console.log(name)
  // Edit karna baaki hai bohot zyada
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
