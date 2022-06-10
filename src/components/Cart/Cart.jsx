import './Cart.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { ItemStructure } from '../ItemStructure/ItemStructure'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Carrito = () => {
    const { cartItems } = useContext(CartContext)
    const uniqueIdArr = new Set()
    const uniqueArr = []

    for(let i = 0; i < cartItems.length; i++) {
        if(!uniqueIdArr.has(cartItems[i].id)){
            uniqueArr.push(cartItems[i])
        }
        uniqueIdArr.add(cartItems[i].id)
    }

    

    const sumaTotal = (cartItems = []) => {
        const arrPrecios = cartItems.map(cartItem => Number(cartItem.precio))
        const initialValue = 0;
        const sumWithInitial = arrPrecios.reduce(
            (previousValue, currentValue) => (previousValue + currentValue), initialValue
        );
        return sumWithInitial
    }

    return (
        <section className='carrito-box'>
            <div className='carrito-productos'>
                <h1 className='carrito-text'>{cartItems.length > 0 ? "Productos en el carrito: " : "Su carrito se encuentra vacio."}</h1>
                {uniqueArr.map(dataItem => {
                    return(
                        <ItemStructure key={dataItem.id} dataItem={dataItem} />
                    )
                })}
            </div>
            <div className='carrito-total-y-comprar'>
                <h2 className='carrito-text'>Total: ${sumaTotal(cartItems)}</h2>
                <Button variant="contained" color='success' disabled={sumaTotal(cartItems) <= 0}>
                    <Link to={`/compra`}>Comprar</Link>
                </Button>
            </div>
        </section>
    )
}

export default Carrito