import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css'; 
import './styles/global.css'; 

createRoot(document.getElementById('root')).render(
    <App />,
)
