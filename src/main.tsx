import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.tsx' 
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ThemeProvider theme={theme}>

    <App />
    </ThemeProvider>
  </StrictMode>,
)
