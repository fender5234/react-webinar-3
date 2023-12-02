import React from "react";
import "./style.css";

function CartInfo({ cartsProduct, onClick, scope }) {
  if (cartsProduct.length > 0) {
    return (
      <div className="cart-info">
        <p className="cart-info__text">
          В корзине: {cartsProduct.length} товара / {scope} ₽
        </p>
        <button onClick={onClick} className="cart-info__button">
          Перейти
        </button>
      </div>
    );
  } else {
    return (
      <div className="cart-info">
        <p className="cart-info__text">
          В корзине <span className="cart-info__text cart-info__text--empty">пусто</span>
        </p>
        <button onClick={onClick} className="cart-info__button">
          Перейти
        </button>
      </div>
    );
  }
}

export default CartInfo;
