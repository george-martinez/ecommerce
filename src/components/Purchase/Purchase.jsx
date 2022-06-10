import { useContext } from "react"
import CartContext from '../../context/CartContext'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import './Purchase.css'
import { nanoid } from 'nanoid'


const Purchase = () => {    
    const { cartItems, setCartItems } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const { name, email, adress } = e.target
        
        if(cartItems.length > 0 && name && email && adress){
            let pedidosRealizados = JSON.parse(localStorage.getItem('miscompras'))
            const orderId = nanoid()

            const orderData = {
                date: Date.now(), 
                orderId: orderId,
                name: name.value,
                email: email.value,
                adress: adress.value
            }
    
            if(!pedidosRealizados){
                pedidosRealizados = []
            }
    
            localStorage.setItem('miscompras', JSON.stringify([...pedidosRealizados,[...cartItems, orderData]]))
            
            for(let i = 0; i < e.target.length - 1; i++) {
                e.target[i].value = ''
            }
            setCartItems([])
        }
    }

    return (
        <div className="purchase-box">
            <h1 className="purchase-title">FINALICE SU COMPRA</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '350px' },
                }}
                autoComplete="on"
                className="purchase-form-box"
                onSubmit={handleSubmit}
            >
                <TextField name="name" label="Nombre" variant="filled" required />
                <TextField name="email" label="Correo Electronico" variant="filled" required />
                <TextField name="adress" label="Direccion" variant="filled" required />
                <Button type="submit" variant="contained" color="secondary">Finalizar compra</Button>
            </Box>
        </div>
    )
}

export default Purchase