import React, { useState } from "react";
import PropTypes from "prop-types";
import AddButton from "../add-button";
import { plural } from "../../utils";
import "./style.css";

function Item(props) {
  return (
    <div className={"Item"}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">{props.item.price}₽</div>
      <div className="Item-actions">
        <AddButton
          item={props.item}
          itemPrice={props.item.price}
          addProductCart={props.addProductCart}
        />
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

export default React.memo(Item);
