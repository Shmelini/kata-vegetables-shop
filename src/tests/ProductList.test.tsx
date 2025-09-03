import {ProductList} from '../modules/ProductList'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'
import { CartContextProvider } from '../context';


describe('ProductList component', () => {
  const products = [
    {
    "id": 1,
    "name": "Brocolli - 1 Kg",
    "price": 120,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    "category": "vegetables"
  },
  {
    "id": 2,
    "name": "Cauliflower - 1 Kg",
    "price": 60,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
    "category": "vegetables"
  },
  {
    "id": 3,
    "name": "Cucumber - 1 Kg",
    "price": 48,
    "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
    "category": "vegetables"
  }
]


    it('should correct render products with products prop', () => {
        render(<MantineProvider><CartContextProvider><ProductList products={products}/></CartContextProvider></MantineProvider>)
        const cardText = screen.getByText(/brocolli/i)
        expect(cardText).toBeInTheDocument()
    })

    it('shouldnt render products with incorrect products prop', () => {
        render(<MantineProvider><CartContextProvider><ProductList products={[]}/></CartContextProvider></MantineProvider>)

        const loader = screen.getByTestId('loader')

        expect(loader).toBeInTheDocument()
    })
    })