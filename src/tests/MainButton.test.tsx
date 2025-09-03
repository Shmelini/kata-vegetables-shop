import {MainButton} from '../ui/MainButton'
import { describe, it, expect, beforeEach, vi, afterAll } from 'vitest'
import { fireEvent, render, screen  } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'

describe('MainButton component', () => {
    const mockFunc = vi.fn()
    beforeEach(()=> {
        vi.resetAllMocks()
    })

    afterAll(() => {
        vi.restoreAllMocks();
    })

    it('should render MainButton', () => {
        render(<MantineProvider><MainButton btnType='card' onClick={mockFunc}/></MantineProvider>)
        const btn = screen.getByTestId('card')
        expect(btn).toBeInTheDocument()
    })

    it('should look different depending on btnType', () => {
        const {rerender} = render(<MantineProvider><MainButton btnType='card' onClick={mockFunc}/></MantineProvider>)
        const btnCard = screen.getByTestId('card')
        expect(btnCard).toBeInTheDocument()
        
        rerender(<MantineProvider><MainButton btnType='cart' onClick={mockFunc}/></MantineProvider>)
        const btnCart = screen.getByTestId('cart')
        expect(btnCart).toBeInTheDocument()
    })

    it('should call func on click', () => {
        render(<MantineProvider><MainButton btnType='card' onClick={mockFunc}/></MantineProvider>)
        const btn = screen.getByTestId('card')
        expect(mockFunc).toBeCalledTimes(0)
        fireEvent.click(btn)
        expect(mockFunc).toBeCalledTimes(1)
    })
})