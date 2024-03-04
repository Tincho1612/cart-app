
import '../ProductCart.css'
export function ProductCart({ product,deleteItem }) {
    return (
        <div className="product-cart">
        <img src={product.image} alt="Product Image" className="product-image"/>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>Precio: {product.price}</p>
          <button className="delete-button" onClick={()=>{deleteItem(product.id)}}>Eliminar</button>
        </div>
      </div>
    );
  }