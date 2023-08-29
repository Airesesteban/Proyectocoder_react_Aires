import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CartContext } from "../../../context/cartContext";
import { ItemCount } from "../Items/ItemCount";
import "./Cart.css";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  
  const { removeItem, clearCart, getSubtotal, getTotal} =
    useContext(CartContext);

  return (
    <Container className="main">
      <h1>Carrito</h1>
      {cart.length === 0 && (
        <h3>
          Su carrito está vacio. Visite nuestros{" "}
          <Link to="productos/all">productos</Link>{" "}
        </h3>
      )}
      {cart.length !== 0 && (
        <Container className="cart__header">
          <div className="cart__header--info">Detalle</div>
          <div className="cart__header--actions">
            <div>Añadir</div>
            <div>Cantidad</div>
            <div>Precio</div>
            <div>Subtotal</div>
            <div>Eliminar</div>
          </div>
        </Container>
      )}
      {cart.length !== 0 &&
        cart.map(({ item, counter }) => (
          <Container className="card__cart" id={item.id} key={item.id}>
            <div className="card__cart--info">
              <div className="card__cart--img">
                <img src={item.image} alt="Foto de producto" />
              </div>
              <div className="card_product--title_principal">
                <h3 className="card__cart--title">{item.title}</h3>
                <p className="card__cart--desc">{item.description}</p>
              </div>
            </div>
            <div className="card__cart--actions">
              <ItemCount item={item} />
              <div className="price">{counter}</div>
              <div className="price">${item.price}</div>
              <div className="price">${getSubtotal(counter, item.price)}</div>
              <button
                className="btn_remove btn"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          </Container>
        ))}
      {cart.length !== 0 && (
        <Container className="cart__footer">
          <button className="btn" onClick={clearCart}>
            Vaciar carrito
          </button>
          <div>Total ${getTotal()}</div>
          <Link className="btn" to="/checkout">
            Finalizar compra
          </Link>
        </Container>
      )}
    </Container>
  );
};
export default Cart