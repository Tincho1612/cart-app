import '../Product.css';
export function Product({product,addToCart}){
    return (
        <div className="product">
      <img src={product.image} alt="Producto"/>
      
        <h2>{product.name}</h2>
        <p>Precio: {product.price}</p>
        <button className="add-to-cart" onClick={()=>addToCart(product.id)}>Añadir al Carrito</button>
      
    </div>
    )
}