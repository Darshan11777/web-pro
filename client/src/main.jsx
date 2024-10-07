import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import './Animate.css'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </Provider>
    
  // </StrictMode>,
)