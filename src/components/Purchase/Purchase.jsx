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

    const handleClick = () => {
        let pedidosRealizados = JSON.parse(localStorage.getItem('miscompras'))
        const numRecibo = nanoid()

        if(!pedidosRealizados){
            pedidosRealizados = []
        }

        localStorage.setItem('miscompras', JSON.stringify([...pedidosRealizados,[...cartItems, {'date': Date.now(), 'numRecibo': numRecibo}]]))

        setCartItems([])
    }

    return (
        <div className="purchase-box">
            <h1 className="purchase-title">FINALICE SU COMPRA</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '350px' },
                }}
                noValidate
                autoComplete="off"
                className="purchase-form-box"
            >
                <TextField id="filled-basic" label="Nombre" variant="filled" />
                <TextField id="filled-basic" label="Correo Electronico" variant="filled" />
                <TextField id="filled-basic" label="Direccion" variant="filled" />
                <Button variant="contained" color="secondary" onClick={handleClick}>Finalizar compra</Button>
            </Box>
        </div>
    )
}

export default Purchase