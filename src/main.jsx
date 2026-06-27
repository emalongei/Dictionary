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
// 🔄 REDIRECT LOCALHOST:8000 TO RENDER (FIXES THE ISSUE)
// ============================================

// Save reference to original fetch (again, for redirect)
const originalFetch2 = window.fetch;
window.fetch = function(...args) {
  let url = args[0];
  
  // Redirect localhost:8000 to your Render URL
  if (typeof url === 'string' && url.includes('localhost:8000')) {
    console.warn('⚠️ Redirecting localhost:8000 to Render...');
    // ⚠️ REPLACE THIS URL WITH YOUR ACTUAL RENDER URL ⚠️
    const newUrl = url.replace('http://localhost:8000', 'https://dictionary-udnx.onrender.com');
    console.log('🔄 New URL:', newUrl);
    return originalFetch2.call(this, newUrl, args[1]);
  }
  
  return originalFetch2.call(this, url, args[1]);
};

// ============================================
// RENDER YOUR APP
// ============================================

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

console.log("testing");
