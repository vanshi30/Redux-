import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR,GET_TOTALS } from "./action";

const CartContainer = ({ cart = [] ,total,dispatch}) => {
  React.useEffect(()=>{
    dispatch({type:GET_TOTALS})
  },[cart,dispatch])
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Mobile</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Mobile</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch({type:CLEAR})}>clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = (store) =>{
  console.log(store);
  const {cart,total} = store
  return {total,cart}
}

export default connect(mapStateToProps)(CartContainer);
