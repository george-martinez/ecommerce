import { ItemStructure } from "../ItemStructure/ItemStructure"
import { nanoid } from 'nanoid'
import '../../Polyfills/mapCustomReverse'
import './Orders.css'
import { collection, getDocs } from "firebase/firestore"
import { useAuthContext } from "../../context/AuthContext";
import { db } from "../../firebase"
import { useEffect, useState } from "react"


const sumaTotal = (itemArr = []) => {
    const arrPrecios = itemArr.mapCustom(item => Number(item.precio))
    const initialValue = 0;
    const sumWithInitial = arrPrecios.reduce(
        (previousValue, currentValue) => (previousValue + currentValue), initialValue
    );
    return sumWithInitial
}

const OrderLister = ({orders}) => {
    return(
        orders.mapCustomReverse((itemArr, index, ordersMap) => {
            const orderData = itemArr[itemArr.length - 1]
            return(
                <div key={orderData.date} className="order-box-detailed">
                    <h2>{`Orden: ${index + 1}`}</h2>
                    <h6 className='order-text-info'>{`Fecha: ${new Date(orderData.date).toLocaleDateString()}`}</h6>
                    <h6 className='order-text-info'>{`Nombre del comprador: ${orderData.name}`}</h6>
                    <h6 className='order-text-info'>{`Email del comprador: ${orderData.email}`}</h6>
                    <h6 className='order-text-info'>{`ID del pedido: ${orderData.orderId}`}</h6>
                    <h5 className="order-text-info">{`Total: $${sumaTotal(ordersMap[index])}`}</h5>
                    <div className="order-box-items-box">
                        {itemArr.mapCustom(item => {
                            return(
                                <ItemStructure 
                                    key={nanoid()} 
                                    dataItem={item} 
                                    showButton={false} 
                                    defaultHeight={'fit-content'}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        })
    )
}

const Orders = () => {

    const { user } = useAuthContext()
    const [ orderState, setOrderState ] = useState(null)

    //const orders = JSON.parse(localStorage.getItem('miscompras'))

    useEffect(() => {
        async function getMarker() {
            if(user?.uid){
                const querySnapshot = await getDocs(collection(db, "users", user.uid, "orders"));
                
                let orders = []

                querySnapshot.forEach((doc) => {
                    orders = [...orders, JSON.parse(doc.data().orders)]
                });

                if(orders.length > 0){
                    setOrderState(orders)
                }
            }
        }
        getMarker()
    },[user])

    return(
        <>
            <h1 className="orders-title">PEDIDOS REALIZADOS</h1>
            <div className="orders-box">
                {orderState ? <OrderLister orders={orderState}/> : <h1>En esta seccion se encontraran sus compras cuando realice algun pedido</h1>}
            </div>
        </>
    )
}

export default Orders

