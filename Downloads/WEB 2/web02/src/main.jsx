import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRoutes from './routes'
import { MyGlobalStyles } from './Styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MainRoutes/>
    <MyGlobalStyles />
  </StrictMode>,
)
