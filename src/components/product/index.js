function Product({ order, title, price, scope }) {
  return (
    <div class="cart-wrapper-body__item">
      <span className="cart-wrapper-body__order">{order}</span>
      <h3 className="cart-wrapper-body__title">{title}</h3>
      <span className="cart-wrapper-body__price">{price}</span>
      <span className="cart-wrapper-body__scope">{scope}</span>
      <button className="card-wrapper__button">Удалить</button>
    </div>
  );
}

export default Product;
