import './CategoryDetails.css'
import procesadores from '../../data/procesadores.json'
import motherboards from '../../data/motherboards.json'
import memoriasram from '../../data/memoriasram.json'
import fuentesdepoder from '../../data/fuentesdepoder.json'
import { useParams } from "react-router-dom"
import { ItemStructure } from "../ItemStructure/ItemStructure"


const CategoryDetails = () => {
    const {nombreCategoria} = useParams()
    
    /* 
        Todo esto puede ser reemplazado por un fetch, haciendo que la informacion sea dinamica dependiendo del URL
    */
    let data = {};

    if(nombreCategoria === 'procesadores'){
        data = procesadores
    }

    if(nombreCategoria === 'motherboards'){
        data = motherboards
    }

    if(nombreCategoria === 'memoriasram'){
        data = memoriasram
    }

    if(nombreCategoria === 'fuentesdepoder'){
        data = fuentesdepoder
    }

    return(
        <div className="item-section">
            {data.map(dataItem => {
                return(
                    <ItemStructure key={dataItem.id} dataItem={dataItem} />
                )
            })}
        </div>
    )
}

export default CategoryDetails;