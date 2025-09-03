import {ProductCard} from '../components/ProductCard'
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent  } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'
import { CartContextProvider } from '../context';


describe('ProductCard component', () => {
    const product = {id: 1,
        name: "Brocolli - 1 Kg",
        price: 120,
        image: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
        category: "vegetables"}
    
    beforeEach(() => {render(<MantineProvider><CartContextProvider><ProductCard product={product}/></CartContextProvider></MantineProvider>)
    })

    

    it('should render ProductCard with correct props', () => {
        const card = screen.getByText(/brocolli/i)
        expect(card).toBeInTheDocument()
    })
    it('should change stepperCount on click', () => {
        const stepperDown = screen.getByTestId('stepper-down')
        const stepperUp = screen.getByTestId('stepper-up')
        const stepperCount = screen.getByTestId('stepper-count')

        expect(stepperCount).toHaveTextContent('1')
        fireEvent.click(stepperDown)
        expect(stepperCount).toHaveTextContent('0')
        fireEvent.click(stepperDown)
        expect(stepperCount).toHaveTextContent('0')
        fireEvent.click(stepperUp)
        fireEvent.click(stepperUp)
        expect(stepperCount).toHaveTextContent('2')
    })
})