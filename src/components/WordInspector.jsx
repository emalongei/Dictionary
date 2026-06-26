import React, { useState } from 'react';
import { Copy, BookMarked, Bookmark, Volume2, HelpCircle, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { mapungIyek, lonsumIyek, cheitaps } from '../data/alphabet';

export default function WordInspector({ word, onToggleBookmark, isBookmarked }) {
  const [copied, setCopied] = useState(false);
  const [hoveredChar, setHoveredChar] = useState(null);

  // Fallback for copy action
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Play simulated TTS using Web Speech API or custom sound
  const handleSpeak = (text, lang = 'hi-IN') => {
    // If Web Speech API is supported
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      // Search for a suitable voice (standard Indian English, Hindi, or Bengali to approximate pronunciation)
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.includes('IN') || v.lang.includes('bn') || v.lang.includes('hi'));
      if (preferredVoice) utterance.voice = preferredVoice;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  };

  // Helper to find letter information for the breakdown hover
  const getCharInfo = (char) => {
    // Check Mapum mayek
    const mapung = mapungIyek.find(m => m.character === char);
    if (mapung) return { ...mapung, type: 'Mapum mayek (Primary Letter)' };

    // Check Lonsum
    const lonsum = lonsumIyek.find(l => l.character === char);
    if (lonsum) return { name: lonsum.name, meaning: `Ends with '${lonsum.sound}'`, ipa: `/${lonsum.sound}/`, type: 'Lonsum (Final Consonant)', description: lonsum.description };

    // Check Cheitap
    const cheitap = cheitaps.find(c => c.character === char);
    if (cheitap) return { name: cheitap.name, meaning: `Vowel modifier for '${cheitap.sound}'`, ipa: `/${cheitap.sound}/`, type: 'Cheitap (Vowel Sign)', description: cheitap.description };

    return { name: 'Extended Character', meaning: 'Additional sound', ipa: '', type: 'Extended Iyek', description: 'Representing sounds added for phonetic completeness.' };
  };

  if (!word) {
    return (
      <div className="inspector-empty">
        <div className="empty-greetings">
          <Sparkles className="icon-sparkle text-violet-400" size={32} />
          <h2>Welcome to Meitei Mayek Dictionary</h2>
          <p>Search for words, browse the alphabet guide, or try the quiz. Select a word from the list to inspect its details and character breakdown.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="word-inspector">
      {/* Top Header Card */}
      <div className="word-card-header">
        <div className="header-meta">
          <span className="badge-pos">{word.pos}</span>
          <span className="badge-category">{word.category}</span>
        </div>
        
        <div className="header-actions">
          <button 
            className={`btn-action-round ${isBookmarked ? 'active' : ''}`}
            onClick={() => onToggleBookmark(word)}
            title={isBookmarked ? "Remove from Bookmarks" : "Add to Bookmarks"}
          >
            {isBookmarked ? <BookMarked size={20} className="text-amber-400" /> : <Bookmark size={20} />}
          </button>
          
          <button 
            className="btn-action-round" 
            onClick={() => handleCopy(word.meitei)}
            title="Copy Meitei Script"
          >
            <Copy size={20} />
          </button>
        </div>
      </div>

      {/* Main Display Script */}
      <div className="word-script-container">
        <h1 className="word-script-display">{word.meitei}</h1>
        {copied && <span className="copy-toast">Copied to clipboard!</span>}
      </div>

      {/* Pronunciation & Transliteration Row */}
      <div className="pronunciation-row">
        <div className="detail-item">
          <span className="label">Romanized</span>
          <div className="translit-value">
            <strong>{word.romanized}</strong>
            <button className="btn-audio" onClick={() => handleSpeak(word.romanized)} title="Listen to pronunciation">
              <Volume2 size={16} />
            </button>
          </div>
        </div>

        <div className="detail-item">
          <span className="label">Bengali Script</span>
          <span className="bengali-value">{word.bengali}</span>
        </div>

        <div className="detail-item">
          <span className="label">English Translation</span>
          <span className="english-value">{word.english}</span>
        </div>
      </div>

      <hr className="divider" />

      {/* Definition Section */}
      <div className="section-container">
        <h3 className="section-title">Definition</h3>
        <p className="definition-text">{word.definition}</p>
      </div>

      {/* Interactive Letter Breakdown */}
      <div className="section-container">
        <div className="section-header-flex">
          <h3 className="section-title">Meitei Mayek Breakdown</h3>
          <span className="helper-hint">Hover or tap on letters below to learn their meaning</span>
        </div>

        <div className="breakdown-flow">
          {word.breakdown && word.breakdown.map((item, index) => (
            <div 
              key={index} 
              className={`breakdown-char-node ${hoveredChar === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredChar(index)}
              onMouseLeave={() => setHoveredChar(null)}
              onClick={() => setHoveredChar(hoveredChar === index ? null : index)}
            >
              <span className="node-char">{item.char}</span>
              <span className="node-name">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Floating details box for breakdown elements */}
        <div className="breakdown-details-box">
          {hoveredChar !== null && word.breakdown[hoveredChar] ? (
            (() => {
              const info = getCharInfo(word.breakdown[hoveredChar].char);
              return (
                <div className="char-hover-info animate-fade-in">
                  <div className="char-hover-header">
                    <span className="char-large">{word.breakdown[hoveredChar].char}</span>
                    <div>
                      <h4>{info.name}</h4>
                      <span className="char-type">{info.type}</span>
                    </div>
                  </div>
                  <div className="char-hover-body">
                    {info.meaning && (
                      <p><strong>Representation:</strong> {info.meaning}</p>
                    )}
                    {info.ipa && (
                      <p><strong>Sound Value (IPA):</strong> <code className="ipa-code">{info.ipa}</code></p>
                    )}
                    <p className="char-desc">{info.description}</p>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="char-hover-placeholder">
              <HelpCircle className="text-slate-500 mb-1" size={24} />
              <p>Click a character to learn more about it.</p>
            </div>
          )}
        </div>
      </div>

      <hr className="divider" />

      {/* Example Sentences */}
      <div className="section-container pb-4">
        <h3 className="section-title">Example Usage</h3>
        <div className="example-box">
          <div className="example-item meitei-script">{word.example.meitei}</div>
          <div className="example-item translit">{word.example.romanized}</div>
          <div className="example-item translation"><ArrowRight size={14} className="inline mr-1" /> {word.example.english}</div>
        </div>
      </div>
    </div>
  );
}
