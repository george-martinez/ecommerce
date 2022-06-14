import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const authContext = createContext({})

export const useAuthContext = () => {
    const context = useContext(authContext)
    if(!context) throw new Error ('There is not auth provider')
    return context
}


export function AuthContextProvider ({ children }) {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return (
        <authContext.Provider value={ { signup, login, logout, loading, user } }>
            {children}
        </authContext.Provider>
    )

}


export default authContext