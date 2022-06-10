import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import Button from '@mui/material/Button';
import removeItem from '../../utils/removeObjectFromArrayById'
import './ItemStructure.css'

const ItemStructure = ({dataItem, showButton = true, defaultHeight = '280px'}) => {

    const { cartItems, setCartItems } = useContext(CartContext)

    const handleClick = (event, dataItem) => { 
        if(event.target.innerText === '+'){
            setCartItems([...cartItems, {...dataItem}])
            localStorage.setItem('cart', JSON.stringify([...cartItems, {...dataItem}]))
        }
        if(event.target.innerText === '-'){
            const newCartItem = removeItem(cartItems, dataItem)
            setCartItems([...newCartItem])
            localStorage.setItem('cart', JSON.stringify([...newCartItem]))
        }
    }

    return(
        <div className="listed-item" key={dataItem.id} style={{height: defaultHeight}}>
            <img src={dataItem.imagen} alt={'Imagen de presentacion de' + dataItem.nombreProducto}/>
            <p className="listed-item__price">${dataItem.precio}</p>
            <p className="listed-item__nombre">{dataItem.nombreProducto}</p>
            <p className="listed-item__vendedor">Vendido por: {dataItem.vendedor}</p>
            <div id='listed-item__buttons'>
                {
                    showButton &&
                    <>
                        <Button variant='outlined' id='listed-item__button' onClick={(event) => handleClick(event, dataItem)}>-</Button>
                        <Button variant='outlined' id='listed-item__button' onClick={(event) => handleClick(event, dataItem)}>+</Button>
                    </> 
                }
            </div>
            <AgregadoAlCarrito dataItem={dataItem} cartItems={cartItems}/>
        </div>
    )
}

const AgregadoAlCarrito = ({ dataItem, cartItems }) => {
    let included = false
    let itemCount = 0

    for(let i = 0; i < cartItems.length; i++) {
        included = false 

        included = cartItems[i].id === dataItem.id

        if(included){
            itemCount++
        }
    }

    return (
        <p className="added-to-cart-box">{itemCount > 0 ? `Agregado ${itemCount}` : ""}</p>
    )
}

export { ItemStructure }
