import './Category.css'
import React from 'react'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';


function Category(props) {
  const boxWidthDefault=170
  const boxHeightDefault=115

  const { cartItems, setCartItems } = useContext(CartContext)

    const style = {
        width: Number(`${props?.boxWidth ? props.boxWidth : boxWidthDefault}`),
        height: Number(`${props?.boxHeight ? props.boxHeight : boxHeightDefault}`)
    };

    return(
      <Grid 
        container
        gap={2}
        columnSpacing={2}
        direction="row"
        alignContent="center"
        justifyContent="center"
        className='category-section'
        marginTop={2}
      >
        {props.categoryBoxes.map( categoryBox => {
          return(
            <Grid item xs={4} md={2} key={categoryBox.id} className='category-box' direction="column" container>
                <img 
                  src={categoryBox.imgUrl} 
                  title={categoryBox.text} 
                  alt={categoryBox.text + 'img'} 
                  className='category-img' 
                  style={{width: '100%', height: style.height}}
                />
              <Link to={`/categoria/${categoryBox.text.toLowerCase().split(' ').join('')}`}>
                <p className='category-text'>{categoryBox.text}</p>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    )
}

export default Category

/* <div className='categoryBtnSection'>
<Button onClick={handleClick} title={categoryBox.text}>-</Button>
<Button onClick={handleClick} title={categoryBox.text}>+</Button>
</div>  */