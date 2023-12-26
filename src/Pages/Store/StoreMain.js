import React, { useState } from 'react'
import ContextProvider from '../../Context/ContextProvider';
import Header from '../../components/Header';
import Cart from './Cart';
import ProductList from './ProductList';
import CartButton from './CartButton';

const StoreMain = () => {

    const [showCart, setShowCart]=useState(false);
    return (
        <ContextProvider>
            <CartButton onShow={()=>{setShowCart(true)}}/>
          {showCart && <Cart onClose={()=>{setShowCart(false)}}/>}
          <Header></Header>
          <ProductList></ProductList>
        </ContextProvider>
      );
}

export default StoreMain

    
  
    
