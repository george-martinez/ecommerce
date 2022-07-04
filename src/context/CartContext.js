import React, { useEffect } from "react"
import { useState } from "react"
import { db } from "../firebase"
import { useAuthContext } from "./AuthContext";

import { doc, setDoc, getDoc } from "firebase/firestore";

const Context = React.createContext({})

export function CartContextProvider ({ children }) {
    const { user } = useAuthContext()
    
    const [cartItems, setCartItems] = useState( [] )
    
    const addToCart = async (dataItemString) => {
        if(user?.uid) {
            await setDoc(doc(db, "users", user.uid, "carts", "cart"), {
                cart: dataItemString,
            });
        }
    }

    const addToOrders = async (orderId, dataItemString) => {
        if(user?.uid) {
            await setDoc(doc(db, "users", user.uid, "orders", orderId), {
                orders: dataItemString,
            });
        }
    }

    useEffect(() => {
        const getSavedCart = async () => {
            if(user?.uid){
                const docRef = doc(db, "users", user?.uid, "carts", "cart");
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    if(docSnap.data().cart.length > 0){
                        setCartItems(JSON.parse(docSnap.data().cart))
                    }
                } else {
                    console.log("No such document for this user yet!");
                }
            }
        }

        getSavedCart()
    },[user])
    
    return (
        <Context.Provider value={{ cartItems, setCartItems, addToCart, addToOrders }}>
            {children}
        </Context.Provider>
    )
}


export default Context