import { StrictMode } from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'
import {App} from '../pages/App'


    
describe('App component', () => {
    it('should render App', () => {
        render(<StrictMode><MantineProvider><App /></MantineProvider></StrictMode>)

        const shopLogo = screen.getByAltText(/vegetable shop/i)

        expect(shopLogo).toBeInTheDocument()
    })
})