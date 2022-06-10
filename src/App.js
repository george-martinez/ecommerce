import './App.css';
import './Polyfills/mapCustom'
import { Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar'
import CarouselCustom from './components/CarouselCustom/CarouselCustom'
import Category from "./components/Category/Category"
import CategoryDetails from "./components/CategoryDetails/CategoryDetails"
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Purchase from './components/Purchase/Purchase'
import Orders from './components/Orders/Orders'
import WhatsApp from './components/WhatsApp/WhatsApp';
import OrderCompleted from './components/OrderCompleted/OrderCompleted'

const theme = createTheme({
    mode: 'light',
    palette: {
        primary: {
          main: '#1565C0',
        },
        secondary: {
          main: '#f50057',
        },
    },
    typography: {
      fontFamily: 'K2D',
      fontSize: 15,
    },
});

function App() {
  const categoryBoxes = [];
  categoryBoxes.push({id: categoryBoxes.length, imgUrl:'/img/power.webp', text:'FUENTES DE PODER'});
  categoryBoxes.push({id: categoryBoxes.length, imgUrl:'/img/ram.jpg', text:'MEMORIAS RAM'});
  categoryBoxes.push({id: categoryBoxes.length, imgUrl:'/img/cpu.webp', text:'PROCESADORES'});
  categoryBoxes.push({id: categoryBoxes.length, imgUrl:'/img/mother.jpg', text:'MOTHERBOARDS'});

  return(
    <div id='content'>
      <CartContextProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar username='George'></ResponsiveAppBar>
          </ThemeProvider>
          <Routes>
            <Route path='/' element={<section className='main-section'> <CarouselCustom/> <Category categoryBoxes={categoryBoxes} /> </section>} />
            <Route path='/categoria/:nombreCategoria' element={<CategoryDetails />} />
            <Route path='/productos' element={<Products />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/compra' element={<Purchase />} />
            <Route path='/pedidos' element={<Orders />} />
            <Route path='/ordercompleted' element={<OrderCompleted />} />
            <Route path='/*' element={<h1>URL Invalida</h1>} />
          </Routes>
          <WhatsApp />
        </CartContextProvider>
    </div>  
  )
}

export default App;