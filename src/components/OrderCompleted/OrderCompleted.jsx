import './OrderCompleted.css'


const OrderCompleted = () => { 
    const orders = JSON.parse(localStorage.getItem('miscompras'))
    
    const orderData = orders[orders.length - 1]
    
    return(
        <>
            <h1 className="orders-completed-title">Su compra ha sido realizada con éxito.</h1>
            <section className="orders-completed-box">
                <h2 className='order-completed-text-info'>Datos de su ultima compra</h2>    
                <h3 className='order-completed-text-info'>{`Fecha: ${new Date(orderData.date).toLocaleDateString()}`}</h3>
                <h3 className='order-completed-text-info'>{`Nombre del comprador: ${orderData.name}`}</h3>
                <h3 className='order-completed-text-info'>{`Email del comprador: ${orderData.email}`}</h3>
                <h3 className='order-completed-text-info'>{`ID de la compra: ${orderData.orderId}`}</h3>
            </section>
        </>
    )
}

export default OrderCompleted