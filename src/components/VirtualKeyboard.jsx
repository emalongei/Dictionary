import React, { useState, useRef } from 'react';
import { Copy, Trash2, Search, CornerDownLeft, Space } from 'lucide-react';
import { mapungIyek, lonsumIyek, cheitaps, digits } from '../data/alphabet';

export default function VirtualKeyboard({ onSearch }) {
  const [inputText, setInputText] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleKeyPress = (char) => {
    // Append the character to the current text buffer
    setInputText((prev) => prev + char);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBackspace = () => {
    setInputText((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInputText('');
  };

  const handleCopy = () => {
    if (!inputText) return;
    navigator.clipboard.writeText(inputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSearchSubmit = () => {
    if (inputText.trim()) {
      onSearch(inputText.trim());
    }
  };

  return (
    <div className="virtual-keyboard-tab">
      <div className="keyboard-header-info">
        <h2>Virtual Meitei Mayek Keyboard</h2>
        <p>Type in the Meitei script using the on-screen keys. Copy your text or search directly in the dictionary database.</p>
      </div>

      {/* Input Display Area */}
      <div className="keyboard-input-container">
        <textarea
          ref={inputRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Use the keyboard below or type here..."
          className="keyboard-textarea"
          rows={3}
        />
        
        <div className="keyboard-actions-row">
          <button 
            className="btn-kbd-action text-red-400 hover:text-red-300" 
            onClick={handleClear} 
            disabled={!inputText}
            title="Clear text"
          >
            <Trash2 size={18} />
            <span>Clear</span>
          </button>
          
          <button 
            className="btn-kbd-action text-amber-400 hover:text-amber-300" 
            onClick={handleCopy} 
            disabled={!inputText}
            title="Copy to clipboard"
          >
            <Copy size={18} />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button 
            className="btn-kbd-action text-emerald-400 hover:text-emerald-300 ml-auto" 
            onClick={handleSearchSubmit}
            disabled={!inputText.trim()}
            title="Search in dictionary"
          >
            <Search size={18} />
            <span>Search Word</span>
          </button>
        </div>
      </div>

      {/* Keyboard Layout */}
      <div className="keyboard-grid-layout">
        
        {/* Mapung Iyek Section */}
        <div className="keyboard-section">
          <h4 className="kbd-section-title">Mapung Iyek (Primary Letters)</h4>
          <div className="kbd-keys-grid">
            {mapungIyek.map((item) => (
              <button 
                key={item.character} 
                className="kbd-key" 
                onClick={() => handleKeyPress(item.character)}
              >
                <span className="key-char">{item.character}</span>
                <span className="key-sub">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mid Row: Lonsum and Cheitap */}
        <div className="keyboard-split-row">
          {/* Lonsum Letters */}
          <div className="keyboard-section">
            <h4 className="kbd-section-title">Lonsum (Consonant Endings)</h4>
            <div className="kbd-keys-grid-small">
              {lonsumIyek.map((item) => (
                <button 
                  key={item.character} 
                  className="kbd-key key-lonsum" 
                  onClick={() => handleKeyPress(item.character)}
                >
                  <span className="key-char">{item.character}</span>
                  <span className="key-sub">-{item.sound}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cheitap Letters */}
          <div className="keyboard-section">
            <h4 className="kbd-section-title">Cheitaps (Vowel Signs)</h4>
            <div className="kbd-keys-grid-small">
              {cheitaps.map((item) => (
                <button 
                  key={item.character} 
                  className="kbd-key key-cheitap" 
                  onClick={() => handleKeyPress(item.character)}
                >
                  <span className="key-char">{item.character}</span>
                  <span className="key-sub">+{item.sound}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Row: Digits and Action Keys */}
        <div className="keyboard-lower-row">
          {/* Digits */}
          <div className="keyboard-section flex-grow">
            <h4 className="kbd-section-title">Digits</h4>
            <div className="kbd-keys-row">
              {digits.map((item) => (
                <button 
                  key={item.character} 
                  className="kbd-key key-digit" 
                  onClick={() => handleKeyPress(item.character)}
                >
                  <span className="key-char">{item.character}</span>
                  <span className="key-sub">{item.value}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="keyboard-controls-section">
            <h4 className="kbd-section-title">Controls</h4>
            <div className="kbd-controls-grid">
              <button className="kbd-key control-btn space-btn" onClick={() => handleKeyPress(' ')} title="Spacebar">
                <Space size={18} />
                <span>Space</span>
              </button>
              <button className="kbd-key control-btn backspace-btn" onClick={handleBackspace} title="Backspace">
                <CornerDownLeft size={18} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
