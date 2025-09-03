import {CartPopup} from '../components/CartPopup'
import { describe, it, expect } from 'vitest'
import { render, screen  } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'
import { CartContextProvider } from '../context';


describe('CartPopup component', () => {
    let product = {
        id: 1,
    name: 'Brocolli - 1kg',
    price: 120,
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    category: 'vegetables',
    count: 1
    }


    it('should show empty cart when passing empty arr in cart prop', () => {
        render(<MantineProvider><CartContextProvider><CartPopup active={true} cart={[]}/></CartContextProvider></MantineProvider>)
        const emptyCart = screen.getByText(/You cart is empty!/i)

        expect(emptyCart).toBeInTheDocument()
    })
    it('should show cart with product when passing correct arr in cart prop', () => {
        render(<MantineProvider><CartContextProvider><CartPopup active={true} cart={[product]}/></CartContextProvider></MantineProvider>)
        const productName = screen.getByText(/Brocolli/i)

        expect(productName).toBeInTheDocument()
    })
    it('should change class when active changing', () => {
        const {rerender} = render(<MantineProvider><CartContextProvider><CartPopup active={false} cart={[product]}/></CartContextProvider></MantineProvider>)

        const test = screen.getByTestId('cart-popup')
        expect(test.className).not.toMatch('popup-container--active')
        
        rerender(<MantineProvider><CartContextProvider><CartPopup active={true} cart={[product]}/></CartContextProvider></MantineProvider>)
        expect(test.className).toMatch('popup-container--active')
    })
})