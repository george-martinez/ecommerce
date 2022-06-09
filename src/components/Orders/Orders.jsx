import { ItemStructure } from "../ItemStructure/ItemStructure"
import { nanoid } from 'nanoid'
import '../../Polyfills/mapCustom'
import './Orders.css'

const Orders = () => {
    const orders = JSON.parse(localStorage.getItem('miscompras'))

    return(
        <div className="orders-box">
            {orders.map((orderArr, index) => {
                return(
                    <div key={orderArr[orderArr.length - 1].date} className="order-box-detailed">
                        <h2>{`Orden: ${index + 1}`}</h2>
                        <div className="order-box-items-box">
                            {orderArr.mapCustom(order => {
                                return(
                                    <ItemStructure key={nanoid()} dataItem={order} showButton={false}/>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Orders