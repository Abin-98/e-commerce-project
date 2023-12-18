import React, { useContext } from "react";
import CartContext from "../../../Context/cart-context";
import { Button } from "react-bootstrap";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((val, item) => {
    return val + Number(item.quantity);
  }, 0);
  return (
    <div>
      <Button
        onClick={props.onShow}
        variant="outline-light"
        className="cart-btn"
      >
        Cart <span className="cart-number"> {numberOfItems} </span>
      </Button>
    </div>
  );
};

export default CartButton;
