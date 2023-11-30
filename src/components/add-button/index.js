import React from "react";

function AddButton({ item, addProductCart,itemPrice}) {
  return <button onClick={() => {addProductCart(item)}}>Добавить</button>;
}

export default AddButton;
