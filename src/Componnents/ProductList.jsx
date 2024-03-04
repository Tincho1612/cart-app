import { Product } from "./Product";
import '../ProductList.css'
export function ProductList({listProduct,addToCart}){
    return (
        <div className="product-list-container">
            {
            listProduct.map((product)=>(
                <Product key={product.id} product={product} addToCart={addToCart}/>
            ))
        }
        </div>
    )
}