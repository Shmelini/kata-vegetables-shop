import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './ui/fonts/fonts.css'
import {App} from './pages/App'
import {MantineProvider} from '@mantine/core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
        <App />
    </MantineProvider>
  </StrictMode>
)
