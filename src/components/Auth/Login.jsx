import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    
    const { login } = useAuthContext()
    const navigate = useNavigate()
    const [ error, setError ] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const { email, password } = e.target

        try {
            await login(email.value, password.value)
            navigate('/home')        
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
            else setError(error.message)
        }
    };

    return(
        <>
            <h1 className="purchase-title">Ingreso</h1>
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
                    <Button type="submit" variant="contained" color="secondary">INGRESAR</Button>
                </Box>
                    {error && <p>{error}</p>}
            </Box>
        </>
    )
}