import { Box, TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import { useAuthContext } from "../../context/AuthContext";
import CartContext from '../../context/CartContext'


export const Login = () => {
    
    const { login, signup } = useAuthContext()
    const [ error, setError ] = useState()
    const [ loginOrRegister, setLoginOrRegister ] = useState(null)
    const { cartItems, addToCart } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const { email, password } = e.target

        try {
            if(loginOrRegister === 'login'){
                await login(email.value, password.value)
            }else if (loginOrRegister === 'register') {
                await signup(email.value, password.value)
            }
            if(cartItems.length > 0){
                addToCart(JSON.stringify([...cartItems]))
            }
            window.history.go(-1)
        } catch (error) {
            if(error.code === 'auth/invalid-email') {
                setError('Correo invalido.')
            }        
            else if(error.code === 'auth/user-not-found'){
                setError('Usuario y/o contraseña incorrecta.')
            }                 
            else if(error.code === 'auth/wrong-password'){
                setError('Usuario y/o contraseña incorrecta.')
            }  
            else if(error.code === 'auth/weak-password'){
                setError('Contraseña debil, la misma debe contener al menos 6 caracteres.')
            }                 
            else if(error.code === 'auth/email-already-in-use'){
                setError('El correo ingresado se encuentra en uso.')
            }                        
            else setError(error.message)
        }
    };

    const handleClick = (e) => {
        const { id } = e.target
        setLoginOrRegister(id)
    }

    return(
        <>
            <h1 className="purchase-title">Ingresa o Registrate</h1>
            <Box className="purchase-box">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '350px' },
                    }}
                    autoComplete="on"
                    className="purchase-form-box"
                    onSubmit={handleSubmit}
                    >
                    <TextField id="emailField" name="email" label="Correo Electronico" variant="filled" required />
                    <TextField type='password' id="passwordField" name="password" label="Contraseña" variant="filled" required />
                    <Button type="submit" variant="contained" color="secondary" id="login" onClick={handleClick}>INGRESAR</Button>
                    <p>O</p>
                    <Button type="submit" variant="contained" color="secondary" id="register" onClick={handleClick}>REGISTRARSE</Button>
                </Box>
                    {error && <p>{error}</p>}
            </Box>
        </>
    )
}