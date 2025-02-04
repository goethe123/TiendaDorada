import React, { useState, useEffect } from 'react';
import 'animate.css';
import './Products.css';


function Products() {
  const [cart, setCart] = useState([]);

  // Productos disponibles
  const products = [
    { 
      id: 1, 
      name: 'Bomber Phillip Plein', 
      price: 7500, 
      image: 'https://cdn-images.farfetch-contents.com/23/54/12/66/23541266_54505163_1000.jpg' 
    },
    { 
      id: 2, 
      name: 'Off White Out Of Office', 
      price: 8200, 
      image: 'https://cdn-images.farfetch-contents.com/21/83/21/34/21832134_52006769_600.jpg' 
    },
    { 
      id: 3, 
      name: 'On Cloud', 
      price: 4000, 
      image: 'https://cdn-images.farfetch-contents.com/27/19/09/26/27190926_57072941_1000.jpg' 
    },
    { 
      id: 4, 
      name: 'Dolce Gabanna Portofino', 
      price:8000, 
      image: 'https://cdn-images.farfetch-contents.com/22/30/19/82/22301982_52139367_1000.jpg' 
    },
    { 
      id: 5, 
      name: 'Alexander McQueen', 
      price: 9000, 
      image: 'https://cdn-images.farfetch-contents.com/24/98/33/84/24983384_57118899_1000.jpg' 
    },
    { 
      id: 6, 
      name: 'Mocasines CH', 
      price: 12000, 
      image: 'https://cdn-images.farfetch-contents.com/26/76/55/90/26765590_56412755_1000.jpg' 
    },
  ];

  // Manejo del carrito en localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    if (typeof localStorage === 'undefined') return;

    const existingCart = [...cart];
    const productIndex = existingCart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      existingCart[productIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setCart(existingCart);

    // Mensaje de confirmación
    console.log(`${product.name} agregado al carrito.`);
  };

  return (
    <div className="container mt-4">
    <h1>Stock.</h1>
    <div className="row product-cards"> {/* Añadida la clase "product-cards" */}
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <div className="card animate__animated animate__fadeInUp">
            <div className="overflow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Precio: ${product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
                aria-label={`Añadir ${product.name} al carrito`}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Products;
