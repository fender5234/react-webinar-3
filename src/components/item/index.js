import React, { useState } from "react";
import PropTypes from "prop-types";
import AddButton from '../add-button';
import { plural } from "../../utils";
import "./style.css";

function Item(props) {
  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);
      if (!props.item.selected) {
        setCount(count + 1);
      }
    },
    onDelete: (e) => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    },
  };

  return (
    <div
      className={"Item" + (props.item.selected ? " Item_selected" : "")}
      onClick={callbacks.onClick}
    >
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">
        {props.item.title}{" "}
        {count
          ? ` | Выделяли ${count} ${plural(count, {
              one: "раз",
              few: "раза",
              many: "раз",
            })}`
          : ""}
      </div>
      <div className="Item-price">{props.item.price}₽</div>
      <div className="Item-actions">
        <AddButton item={props.item} itemPrice={props.item.price} addProductCart={props.addProductCart}/>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
