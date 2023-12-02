import React, { useCallback, useState } from "react";
import List from "./components/list";
// import Controls from "./components/controls";
import Head from "./components/head";
import Cart from "./components/cart";
import CartInfo from "./components/cart-info";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [open, setOpen] = useState(false);
  const [cartsProduct, setCartsProduct] = useState([]);
  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),

    onSelectItem: useCallback(
      (code) => {
        store.selectItem(code);
      },
      [store]
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
  };

  function addProductCart(product) {
    let isProductArray = false;

    cartsProduct.forEach((item) => {
      if (item.code === product.code) {
        item.quantity++;
        isProductArray = true;
      }
    });

    if (!isProductArray) {
      setCartsProduct([...cartsProduct, product]);
    }
  }

  function deleteProductCart(product) {
    setCartsProduct(() => {
      return [
        ...cartsProduct.filter((item) => {
          return (item.quantity = 1), item.code !== product;
        }),
      ];
    });
  }

  function openCart() {
    setOpen(true);
  }

  function closeCart() {
    setOpen(false);
  }

  const productPriceAll = cartsProduct.reduce(function (
    prevPrice,
    currentPrice
  ) {
    return prevPrice + currentPrice.price;
  },
  0);

  return (
    <PageLayout>
      <Head title="Магазин" />
      <CartInfo
        cartsProduct={cartsProduct}
        onClick={openCart}
        scope={productPriceAll}
      />
      <Cart
        open={open}
        onClick={closeCart}
        cartsProduct={cartsProduct}
        scope={productPriceAll}
        deleteProductCart={deleteProductCart}
      />
      <List list={list} addProductCart={addProductCart} />
    </PageLayout>
  );
}

export default App;
