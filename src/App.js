
import './App.css';
import { Cart } from './Componnents/Cart';
import { FormAddProduct } from './Componnents/FormAddProduct';
import { ProductList } from './Componnents/ProductList';
import data from './products.json'
import { useState } from 'react';

function App() {
const [products,setProducts] = useState(data)
const [cartProducts,setCartProducts]= useState([])

const addToCart = (id) => {
  const productToAdd = products.find((product) => product.id === id);
  let present=false
  if (productToAdd) {
    cartProducts.map((element)=>{
      if (element==productToAdd){
        present=true
      }
    })
    if (!present){
      setCartProducts([...cartProducts, productToAdd]);
    }
    
  }
};

const addProduct = (name,price,image)=>{
    let product = {id:+new Date(),name:name,price:Number(price),image:image}
      setProducts([...products,product])
}

const deleteItem = (id)=>{
  const updateCartProducts= cartProducts.filter(product=>product.id!==id)
  setCartProducts(updateCartProducts)
}

  return (
    <div className="container">
      <div className="Product-form">
        <FormAddProduct  addProduct={addProduct}/>
      </div>
        <ProductList  listProduct={products} className="product-list-container" addToCart={addToCart}/>
      <div>
        <Cart products={cartProducts} deleteItem={deleteItem}/>
      </div>
      
    </div>
  );
}

export default App;
