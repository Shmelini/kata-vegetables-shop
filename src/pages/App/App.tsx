import '@mantine/core/styles.css';
import'./App.scss'
import type { Product } from '../../types/types';
import { useEffect, useState } from 'react';
import ky from 'ky'
import {Header} from '../../modules/Header';
import {ProductList} from '../../modules/ProductList';
import { CartContextProvider } from '../../context';

export function App() {
  const [products, setProducts] = useState<Product[]>([])
  
      useEffect(() => {
        async function getProductsList() {
          try {
            const data: Product[] = await ky.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json').json()
            setProducts(data)
          } catch(err) {
            console.error(err)
          }
        }
        setTimeout(getProductsList, 1000);
  
      }, [])


  return (
      <CartContextProvider>
        <Header />
      <ProductList products={products}/>
      </CartContextProvider>

      

  )
}



