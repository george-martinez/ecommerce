import procesadores from '../../data/procesadores.json'
import motherboards from '../../data/motherboards.json'
import memoriasram from '../../data/memoriasram.json'
import fuentesdepoder from '../../data/fuentesdepoder.json'
import { ItemStructure } from '../ItemStructure/ItemStructure'
import './Products.css'

const Products = () => {
    const mergeArr = Array.prototype.concat(procesadores, motherboards, memoriasram, fuentesdepoder)
    
    return (
        <>
            <h1 className='products-title'>Productos disponibles: </h1>
            <div className="item-section"> 
            {mergeArr.map(mergeItem => <ItemStructure key={mergeItem.id} dataItem={mergeItem} />)}
            </div>
        </>
    )
}

export default Products