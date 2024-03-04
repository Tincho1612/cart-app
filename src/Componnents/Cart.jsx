import { useState } from "react"
import { ProductCart } from "./ProductCart"

export function Cart({ products,deleteItem }) {

    const total = ()=>{
        
         return products.reduce((total, elemento) => total + elemento.price, 0);
        
    }

    return (
      <div>
        <h2>Tu carrito:</h2>
        {products.map((product) => (
          <ProductCart key={product.id} product={product} deleteItem={deleteItem} />
        ))}
        <h3>Total:{total()}</h3>
      </div>
    );
  }