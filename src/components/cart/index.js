import React from "react";
import DeleteButton from "../delete-button";
import "./style.css";
function Сart({ open, onClick, scope, cartsProduct, deleteProductCart }) {
  return (
    <div className={open ? "cart-body cart-body--active" : "cart-body"}>
      <div className="cart-wrapper">
        <div className="card-wrapper__header">
          <div className="card-wrapper__header-wrapper">
            <h2 className="card-wrapper__title">Корзина</h2>
            <button onClick={onClick} className="card-wrapper__button">
              Закрыть
            </button>
          </div>
        </div>
        <div className="wrapper">
          {cartsProduct.map((item) => {
            return (
              <div className="Item" key={item.code}>
                <div className="Item-code">{item.code}</div>
                <div className="Item-title">{item.title}</div>
                <div className="Item-price">{item.price}₽</div>
                <div className="Item-price">{item.quantity}шт.</div>
                <div className="Item-actions">
                  <DeleteButton
                    deleteProductCart={deleteProductCart}
                    itemCode={item.code}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-wrapper-body__item cart-wrapper-body__item--footer">
          <span className="cart-wrapper-all">Итого</span>
          <span className="cart-wrapper-scope-value">{scope} ₽</span>
        </div>
      </div>
    </div>
  );
}

export default Сart;
