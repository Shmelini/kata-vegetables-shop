import {Stepper} from '../ui/Stepper'
import { describe, it, expect, beforeEach, vi, afterAll } from 'vitest'
import { fireEvent, render, screen  } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';
import {MantineProvider} from '@mantine/core'

describe('Stepper component', () => {
    const mockFunc = vi.fn()
    beforeEach(()=> {
        render(<MantineProvider><Stepper count={1} handleClick={mockFunc}/></MantineProvider>)
        vi.resetAllMocks()
    })

    afterAll(() => {
        vi.restoreAllMocks();
    })

    it('should render MainButton', () => {
        const stepper = screen.getByTestId('stepper')
        expect(stepper).toBeInTheDocument()
    })

    it('should call func on click', () => {
        const stepperDown = screen.getByTestId('stepper-down')
        const stepperUp = screen.getByTestId('stepper-up')

        fireEvent.click(stepperDown)
        expect(mockFunc).toBeCalledWith(false)

        fireEvent.click(stepperUp)
        expect(mockFunc).toBeCalledWith(true)
    })
})