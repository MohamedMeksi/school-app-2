
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { register } from './registerServiceWorker'

// Initialiser l'application
createRoot(document.getElementById("root")!).render(<App />);

// Enregistrer le service worker pour les fonctionnalités hors ligne
register();
