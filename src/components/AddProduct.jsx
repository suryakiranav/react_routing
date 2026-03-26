import {useState} from 'react'
import { addProduct } from '../api/api'

const AddProduct = () => {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProduct = {
            product: product,
            price: Number(price),
            category: category
        }
        try{
            addProduct(newProduct)
            alert('Product added successfully!')
            setProduct('')
            setPrice('')
            setCategory('')
        }
        catch(e){
            alert('Error adding product:', e)
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <label>Product Name:</label>
            <input type='text' value={product}
             onChange={(e) => setProduct(e.target.value)} /><br />
            <label>Price:</label>
            <input type='number' value={price}
             onChange={(e) => setPrice(e.target.value)} /><br />
            <label>Category:</label>
            <input type='text' value={category}
             onChange={(e) => setCategory(e.target.value)} /><br />
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct