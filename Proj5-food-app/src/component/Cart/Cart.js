import Model from "../UI/Model";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CardContext from "../../store/card-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CardContext);
  console.log(cartCtx);

  const totalAmount = `$${cartCtx.totals.toFixed(2)}`;

  const totaltems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeitem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.additem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Model>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {totaltems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};
export default Cart;
