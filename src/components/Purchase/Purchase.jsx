import { useContext } from "react"
import CartContext from '../../context/CartContext'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom'
import './Purchase.css'
import { nanoid } from 'nanoid'
import { useState } from "react";


const Purchase = () => {    
    const { cartItems, setCartItems } = useContext(CartContext)
    const [ buyDone, setBuyDone ] = useState(false)
    const [ buyButtonEnabled, setBuyButtonEnabled ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const { name, email, adress } = e.target
        
        if(cartItems.length > 0 && name && email && adress){
            let allOrders = JSON.parse(localStorage.getItem('miscompras'))
            const orderId = nanoid()

            const orderData = {
                date: Date.now(), 
                orderId: orderId,
                name: name.value,
                email: email.value,
                adress: adress.value
            }
    
            if(allOrders === null){
                allOrders = []
            }
    
            localStorage.setItem('miscompras', JSON.stringify([...allOrders, [...cartItems, orderData]]))
            
            for(let i = 0; i < e.target.length - 1; i++) {
                e.target[i].value = ''
            }

            setCartItems([])
            localStorage.removeItem('cart')
            
            setBuyDone(true)
        }
    }

    const handleDisabled = () => {
        const nombre = document.getElementById('nameField').value
        const email = document.getElementById('emailField').value
        const adress = document.getElementById('adressField').value
        const bool = nombre && email && adress
        setBuyButtonEnabled(bool)
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
                <TextField id="nameField" name="name" label="Nombre" variant="filled" required onChange={handleDisabled} />
                <TextField id="emailField" name="email" label="Correo Electronico" variant="filled" required onChange={handleDisabled} />
                <TextField id="adressField" name="adress" label="Direccion" variant="filled" required onChange={handleDisabled} />
                <Button type="submit" variant="contained" color="secondary" disabled={!Boolean(buyButtonEnabled)}>Finalizar compra</Button>
                {buyDone ? <Navigate to={'/ordercompleted'} /> : <></>}
            </Box>
        </div>
    )
}

export default Purchase