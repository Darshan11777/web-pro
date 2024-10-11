import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import './Animate.css'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'

import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    

    <App />
    <ToastContainer />
    
  </Provider>
    
  // </StrictMode>,
)
