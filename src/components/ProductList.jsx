import React,{useState,useEffect} from 'react'
import { getProducts } from '../api/api'

const ProductList = () => {
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])



  return (
    <div>
        <h1>Product List</h1>
        {
            products.map((product) => (
                <div key={product.id}>
                    <h2>{product.product}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            ))
        }

    </div>
  )
}

export default ProductList