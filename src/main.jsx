import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ============================================
// 🕵️ INTERCEPT ALL FETCH CALLS TO FIND LOCALHOST:8000
// ============================================

// Save reference to original fetch
const originalFetch = window.fetch;

// Override fetch to intercept all calls
window.fetch = function(...args) {
  const url = args[0];
  
  // Log EVERY fetch call
  console.log('🔍 FETCH CALLED WITH URL:', url);
  
  // If it's localhost:8000, show where it's coming from
  if (typeof url === 'string' && url.includes('localhost:8000')) {
    console.error('🚨 FOUND localhost:8000 REQUEST!');
    console.error('URL:', url);
    console.trace('📞 This is where the request is coming from:');
  }
  
  // Call the original fetch
  return originalFetch.apply(this, args);
};

// Also intercept XMLHttpRequest (just in case)
const originalXHROpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url, ...rest) {
  console.log('🔍 XHR CALL:', method, url);
  if (typeof url === 'string' && url.includes('localhost:8000')) {
    console.error('🚨 XHR to localhost:8000!');
    console.trace('📞 Stack trace:');
  }
  return originalXHROpen.call(this, method, url, ...rest);
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
    const newUrl = url.replace('http://localhost:8000', 'https://dictionary-udnx.onrender.com/allentries');
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