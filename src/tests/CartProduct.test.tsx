import {CartProduct} from '../ui/CartProduct'
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen  } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'
import { CartContextProvider } from '../context';

describe('CartProduct component', () => {
    let product = {
        id: 1,
    name: 'Brocolli - 1kg',
    price: 120,
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    category: 'vegetables',
    count: 1
    }

    beforeEach(() => {render(<MantineProvider><CartContextProvider><CartProduct product={product}/></CartContextProvider></MantineProvider>)
    })


    it('should render ProductCard with correct props', () => {
            const card = screen.getByText(/brocolli/i)
            expect(card).toBeInTheDocument()
    })
})