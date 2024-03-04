import { useState } from "react";
import '../FormProduct.css'
export function FormAddProduct({addProduct}){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (name.trim()!=='',price.trim()!=='',image.trim()!==''){
            addProduct(name,price,image)
            setImage('')
            setName('')
            setPrice(0)
        }
    }

    return (
        <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label htmlFor="nombre" className="control-label">Nombre:</label>
          <input type="text" id="nombre" value={name} onChange={(event) => setName(event.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="precio" className="control-label">Precio:</label>
          <input
            type="number"
            id="precio"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen" className="control-label">URL de la imagen:</label>
          <input
            type="text"
            id="imagen"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Agregar Producto</button>
        </div>
      </form>
    </div>
    )
}