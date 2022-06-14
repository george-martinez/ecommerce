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
            const orderId = nanoid()
            
            let allOrders = JSON.parse(localStorage.getItem('miscompras'))
            
            if(allOrders === null){
                allOrders = []
            }
            
            const orderData = {
                date: Date.now(), 
                orderId: orderId,
                name: name.value,
                email: email.value,
                adress: adress.value
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

    const handleEnabled = () => {
        const nombre = document.getElementById('nameField').value
        const email = document.getElementById('emailField').value
        const adress = document.getElementById('adressField').value
        const bool = nombre && email && adress
        setBuyButtonEnabled(bool)
    }

    return (
        <>
            <h1 className="purchase-title">POR FAVOR REGISTRESE / LOGUEESE PARA FINALIZAR SU COMPRA</h1>
            <div className="purchase-box">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '350px' },
                    }}
                    autoComplete="on"
                    className="purchase-form-box"
                    onSubmit={handleSubmit}
                >
                    <TextField id="nameField" name="name" label="Nombre" variant="filled" required onChange={handleEnabled} />
                    <TextField id="emailField" name="email" label="Correo Electronico" variant="filled" required onChange={handleEnabled} />
                    <TextField id="adressField" name="adress" label="Direccion" variant="filled" required onChange={handleEnabled} />
                    <Button type="submit" variant="contained" color="secondary" disabled={!Boolean(buyButtonEnabled)}>Finalizar compra</Button>
                    {buyDone ? <Navigate to={'/ordercompleted'} /> : <></>}
                </Box>
            </div>
        </>
        )
}

export default Purchase