import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CheckOut from "./CheckOut";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const [isCheckout, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(null);
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const checkoutHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://httprequest-bd06d-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    } catch (error) {
      setError(error.message);
    }
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const actions = (
    <div className={classes.actions}>
      <Link to="/">
        <button className={classes["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
      </Link>
      {hasItems && (
        <button className={classes.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItemsContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOut onConfirm={submitOrderHandler} onCancel={props.hideCart} />
      )}
      {!isCheckout && actions}
    </>
  );

  const submittingContent = <p>Please wait while we confirming your order</p>;

  const submittedContent = (
    <>
      <p>Order placed successfully</p>
      <div className={classes.actions}>
        <Link to="/">
          <button className={classes.button} onClick={props.hideCart}>
            Close
          </button>
        </Link>
      </div>
    </>
  );

  return (
    <Modal onClose={props.hideCart}>
      {!isSubmitting && !didSubmit && cartItemsContent}
      {isSubmitting && !didSubmit && submittingContent}
      {!isSubmitting && didSubmit && submittedContent}
    </Modal>
  );
};
export default Cart;
