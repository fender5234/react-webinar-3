import React from "react";

function DeleteButton({ deleteProductCart, itemCode }) {
  return (
    <button
      onClick={() => {
        deleteProductCart(itemCode);
      }}
    >
      Удалить
    </button>
  );
}

export default DeleteButton;
