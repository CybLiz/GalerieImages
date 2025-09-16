import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GalView from './view/GalView.jsx'

createRoot(document.getElementById('root')).render(
    <><App /><GalView /></>
)
