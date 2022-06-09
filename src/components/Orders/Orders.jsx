import { ItemStructure } from "../ItemStructure/ItemStructure"
import { nanoid } from 'nanoid'
import './Orders.css'

const OrderLister = ({orders}) => {
    return(
        orders.map((orderArr, index) => {
            const orderData = orderArr[orderArr.length - 1]
            return(
                <div key={orderData.date} className="order-box-detailed">
                    <h2>{`Orden: ${index + 1}`}</h2>
                    <h6 className='order-text-info'>{`Fecha: ${new Date(orderData.date).toLocaleDateString()}`}</h6>
                    <h6 className='order-text-info'>{`Nombre del comprador: ${orderData.name}`}</h6>
                    <h6 className='order-text-info'>{`Email del comprador: ${orderData.email}`}</h6>
                    <h6 className='order-text-info'>{`ID del pedido: ${orderData.orderId}`}</h6>
                    <div className="order-box-items-box">
                        {orderArr.mapCustom(order => {
                            return(
                                <ItemStructure 
                                    key={nanoid()} 
                                    dataItem={order} 
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
    const orders = JSON.parse(localStorage.getItem('miscompras'))

    return(
        <>
            <h1 className="orders-title">PEDIDOS REALIZADOS</h1>
            <div className="orders-box">
                {orders ? <OrderLister orders={orders}/> : <h1>En esta seccion se encontraran sus compras cuando realice algun pedido</h1>}
            </div>
        </>
    )
}

export default Orders