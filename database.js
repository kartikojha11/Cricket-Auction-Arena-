import {initializeApp} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
import {getAuth,signInAnonymously,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {firebaseConfig} from "../firebase-config.js";
let app,db,auth;
export async function initFirebase(){if(!firebaseConfig.apiKey||firebaseConfig.apiKey.startsWith("PASTE_"))throw Error("Firebase config is not filled in.");app=initializeApp(firebaseConfig);db=getDatabase(app);auth=getAuth(app);await signInAnonymously(auth);if(!auth.currentUser)await new Promise(resolve=>{const unsub=onAuthStateChanged(auth,()=>{unsub();resolve()})});return{app,db,auth}}
export const getDb=()=>db;export const getUid=()=>auth?.currentUser?.uid;
