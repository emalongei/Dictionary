// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ============================================
// 🕵️ DEBUG: LOG ALL FETCH CALLS
// ============================================

const originalFetch = window.fetch;
window.fetch = function(...args) {
  const url = args[0];
  console.log('🔍 FETCH CALLED WITH URL:', url);
  return originalFetch.apply(this, args);
};

// ============================================
// RENDER APP
// ============================================

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<<<<<<< HEAD
  </StrictMode>
);
=======
  </StrictMode>,
)

console.log("testing");
>>>>>>> cc8d651122406ffbeea1df0b4f8c69124d3da0c6
