import React from 'react';
import './CartWidget.css';
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useCartContext from '../../store/CartContext';

function CartWidget(props) {
  const { itemsTotal } = useCartContext();
  return (
<LinkContainer to="/cart" className="text-dark">
<div className="cart-icon">
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      { itemsTotal()? <div className="mostrar-cantidad">{itemsTotal()}</div>
      : <div className="mostrar-cantidad2">{itemsTotal()}</div> }

    </div>
</LinkContainer>
);
}
export default CartWidget;