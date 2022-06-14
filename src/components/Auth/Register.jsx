import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    
    const { signup } = useAuthContext()
    const navigate = useNavigate()
    const [ error, setError ] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const { email, password } = e.target

        try {
            await signup(email.value, password.value)
            navigate('/home')        
        } catch (error) {
            if(error.code === 'auth/invalid-email') {
                setError('Correo invalido.')
            }
            else if(error.code === 'auth/weak-password'){
                setError('Contraseña debil, la misma debe contener al menos 6 caracteres.')
            }                 
            else if(error.code === 'auth/email-already-in-use'){
                setError('El correo ingresado se encuentra en uso.')
            }                 
            else setError(error.message)
            console.log(error.message)   
        }
    };

    return(
        <>
            <h1 className="purchase-title">Registro</h1>
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
                    <Button type="submit" variant="contained" color="secondary">REGISTRARSE</Button>
                </Box>
                    {error && <p>{error}</p>}
            </Box>
        </>
    )
}