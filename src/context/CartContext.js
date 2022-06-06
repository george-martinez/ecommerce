import React from "react"
import { useState } from "react"

const Context = React.createContext({})


//reemplazar setCartItems por otra funcion que use localstorage, y como fallback se inicie vacio
export function CartContextProvider ({ children }) {
    const [cartItems, setCartItems] = useState([])

    return (
        <Context.Provider value={{cartItems, setCartItems}}>
            {children}
        </Context.Provider>
    )
}


export default Context