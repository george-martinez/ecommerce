import Carousel from 'react-material-ui-carousel'
import Home from '@mui/icons-material/Home';
import CircleIcon from '@mui/icons-material/Circle';
import { Paper, Button } from '@mui/material'
import './CarouselCustom.css'

const CarouselCustom = () => {

    var items = [
        {
            name: "Procesadores AMD",
            description: "Conocelos, los mas potentes del mercado para multitareas!",
            imgUrl: "/img/carousel/1.jpg"
        },
        {
            name: "Motherboards GIGABYTE",
            description: "Las mejores para tu procesador, y sobretodo CALIDAD PRECIO!",
            imgUrl: "/img/carousel/2.jpg"
        },
        {
            name: "CORSAIR",
            description: "Las fuentes de poder mas confiables!",
            imgUrl: "/img/carousel/3.webp"
        }
      ]
    
      function Item(props)
      {
          return (
              <>
                <Paper>
                  <h2>{props.item.name}</h2>
                  <p>{props.item.description}</p>
                </Paper>
                <div className='carousel-img-text-box'>
                    <img src={props.item.imgUrl} alt='logo' style={{height:'350px', objectFit:'cover'}}></img>
                </div>
              </>
          )
      }
    
      const indicator = [<Home/>, <CircleIcon/>, <CircleIcon/>]


      return (
        <div className='carousel-box'>
            <Carousel 
            IndicatorIcon={indicator}
            indicatorIconButtonProps={{style:{color: 'black'}}}
            activeIndicatorIconButtonProps={{style:{color: 'white'}}}
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <h1 className='categorias-text'>CATEGORIAS</h1>
        </div>
      )
    }
    
    //<h1>CATEGORIAS</h1>








export default CarouselCustom