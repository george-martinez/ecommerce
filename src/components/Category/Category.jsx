import './Category.css'
import React from 'react'
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import { Box } from '@mui/material';


function Category(props) {
  const boxWidthDefault=170
  const boxHeightDefault=115
  
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
            <Link to={`/categoria/${categoryBox.text.toLowerCase().split(' ').join('')}`} className='anchorstyle'>
              <Box>
                <img 
                  src={categoryBox.imgUrl} 
                  title={categoryBox.text} 
                  alt={categoryBox.text + 'img'} 
                  className='category-img' 
                  style={{width: '100%', height: style.height}}
                />
                <p className='category-text'>{categoryBox.text}</p>
            </Box>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Category