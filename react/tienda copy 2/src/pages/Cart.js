import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (productId) => {
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart = existingCart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    setCartItems(existingCart);
  };

  const removeOneItem = (productId) => {
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = existingCart.findIndex(item => item.id === productId);

    if (productIndex !== -1 && existingCart[productIndex].quantity > 1) {
      existingCart[productIndex].quantity -= 1;
    } else {
      existingCart = existingCart.filter(item => item.id !== productId);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setCartItems(existingCart);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {item.name} (x{item.quantity})
                </div>
                <div>
                  <span>${item.price * item.quantity}</span>
                  <div className="mt-2 d-flex">
                    <button 
                      className="btn btn-primary btn-sm mr-3" 
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginRight: '7px' }}
                    >
                      Eliminar
                    </button>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => removeOneItem(item.id)}
                      style={{ marginLeft: '7px' }}
                    >
                      Quitar uno
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between">
            <h3>Total: ${totalCost}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
