// import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/Tasks.css";
import { useCart } from "../context/CartContext";
import Cart from "../components/Cart";

const Carts = () => {
  const { items, deleteItem } = useCart();

  return (
    <>
      <Header />
      {items.length > 0 ? (
        <div className="tasks-grid">
          {items.map((singleItem) => (
            <Cart cart={singleItem} key={singleItem.id} deleteItem={deleteItem} />
          ))}
        </div>
      ) : (
        <div className="no-tasks">Empty Cart</div>
      )}
      <Footer />
    </>
  );
};

export default Carts;
