import React, { useState } from 'react';
import { Volume2, Sparkles, AlertCircle, Info, Layers } from 'lucide-react';
import { mapungIyek, lonsumIyek, cheitaps, digits } from '../data/alphabet';

// Map letter names to emoji/indicators for visual enhancement
const bodyPartEmojis = {
  Kok: '👤 Head',
  Sam: '💇 Hair',
  Lai: '💆 Forehead',
  Mit: '👁️ Eye',
  Pa: '👁️ Eyelash',
  Na: '👂 Ear',
  Chil: '👄 Lips / Mouth',
  Til: '👅 Saliva / Tongue',
  Khou: '🗣️ Throat',
  Ngou: '🎙️ Larynx',
  Thou: '🫁 Chest / Heart',
  Wai: '🌀 Navel',
  Yang: '🦴 Backbone',
  Huk: '🦵 Lower Spine / Joints',
  Un: '🖐️ Skin',
  Ee: '🩸 Blood',
  Pham: '👶 Placenta / Womb',
  Atiya: '🌌 Sky / Cosmos'
};

export default function AlphabetGuide() {
  const [activeSection, setActiveSection] = useState('mapung');
  const [selectedLetter, setSelectedLetter] = useState(mapungIyek[0]);

  // Audio synthesis helper
  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="alphabet-guide-tab">
      <div className="alphabet-header">
        <div>
          <h2>Meitei Mayek Script Guide</h2>
          <p>Learn the structure of the traditional Manipuri script. Each core letter represents a part of the human anatomy.</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="alphabet-nav">
          <button 
            className={`btn-nav-tab ${activeSection === 'mapung' ? 'active' : ''}`}
            onClick={() => { setActiveSection('mapung'); setSelectedLetter(mapungIyek[0]); }}
          >
            Mapum mayek (27 Core)
          </button>
          <button 
            className={`btn-nav-tab ${activeSection === 'lonsum' ? 'active' : ''}`}
            onClick={() => { setActiveSection('lonsum'); setSelectedLetter(lonsumIyek[0]); }}
          >
            Lonsum (8 Endings)
          </button>
          <button 
            className={`btn-nav-tab ${activeSection === 'cheitap' ? 'active' : ''}`}
            onClick={() => { setActiveSection('cheitap'); setSelectedLetter(cheitaps[0]); }}
          >
            Cheitaps (8 Vowels)
          </button>
          <button 
            className={`btn-nav-tab ${activeSection === 'digits' ? 'active' : ''}`}
            onClick={() => { setActiveSection('digits'); setSelectedLetter(digits[0]); }}
          >
            Digits (0-9)
          </button>
        </div>
      </div>

      <div className="alphabet-content-grid">
        {/* Left Side: Letters Grid */}
        <div className="alphabet-grid-container">
          <div className="grid-list">
            
            {activeSection === 'mapung' && mapungIyek.map((item) => (
              <div 
                key={item.name}
                className={`alphabet-card ${selectedLetter?.name === item.name ? 'selected' : ''}`}
                onClick={() => setSelectedLetter(item)}
              >
                <span className="card-glyph">{item.character}</span>
                <span className="card-label">{item.name}</span>
                <span className="card-sub">{item.meaning}</span>
              </div>
            ))}

            {activeSection === 'lonsum' && lonsumIyek.map((item) => (
              <div 
                key={item.name}
                className={`alphabet-card card-lonsum-bg ${selectedLetter?.name === item.name ? 'selected' : ''}`}
                onClick={() => setSelectedLetter(item)}
              >
                <span className="card-glyph">{item.character}</span>
                <span className="card-label">{item.name}</span>
                <span className="card-sub">-{item.sound} sound</span>
              </div>
            ))}

            {activeSection === 'cheitap' && cheitaps.map((item) => (
              <div 
                key={item.name}
                className={`alphabet-card card-cheitap-bg ${selectedLetter?.name === item.name ? 'selected' : ''}`}
                onClick={() => setSelectedLetter(item)}
              >
                <span className="card-glyph">{item.character}</span>
                <span className="card-label">{item.name}</span>
                <span className="card-sub">vowel modifier</span>
              </div>
            ))}

            {activeSection === 'digits' && digits.map((item) => (
              <div 
                key={item.name}
                className={`alphabet-card card-digit-bg ${selectedLetter?.name === item.name ? 'selected' : ''}`}
                onClick={() => setSelectedLetter(item)}
              >
                <span className="card-glyph">{item.character}</span>
                <span className="card-label">{item.name}</span>
                <span className="card-sub">Value: {item.value}</span>
              </div>
            ))}

          </div>
        </div>

        {/* Right Side: Detailed Letter Inspector Card */}
        <div className="alphabet-inspector-container">
          {selectedLetter ? (
            <div className="letter-inspect-card">
              <div className="letter-inspect-display-box">
                <span className="inspect-glyph-large animate-glow">{selectedLetter.character}</span>
                <div className="inspect-title-group">
                  <h3>{selectedLetter.name}</h3>
                  <button className="btn-audio-circle" onClick={() => handleSpeak(selectedLetter.name)} title="Pronounce">
                    <Volume2 size={16} />
                  </button>
                </div>
              </div>

              <div className="inspect-details">
                {activeSection === 'mapung' && (
                  <>
                    <div className="inspect-row">
                      <span className="inspect-label">Anatomical Association</span>
                      <span className="inspect-val font-semibold text-indigo-400">
                        {bodyPartEmojis[selectedLetter.name] || selectedLetter.meaning}
                      </span>
                    </div>

                    <div className="inspect-row">
                      <span className="inspect-label">Pronunciation IPA</span>
                      <span className="inspect-val font-mono bg-slate-800 px-2 py-0.5 rounded text-amber-300">
                        {selectedLetter.ipa}
                      </span>
                    </div>

                    <div className="inspect-info-box mt-4">
                      <Info className="text-violet-400 flex-shrink-0 mr-2" size={18} />
                      <p className="text-sm leading-relaxed">{selectedLetter.description}</p>
                    </div>
                  </>
                )}

                {activeSection === 'lonsum' && (
                  <>
                    <div className="inspect-row">
                      <span className="inspect-label">Consonant Sound</span>
                      <span className="inspect-val font-semibold text-emerald-400">
                        Ends with /-{selectedLetter.sound}/ sound
                      </span>
                    </div>

                    <div className="inspect-row">
                      <span className="inspect-label">Maps to Primary Letter</span>
                      <span className="inspect-val font-semibold text-indigo-300">
                        {selectedLetter.mapsTo} (root)
                      </span>
                    </div>

                    <div className="inspect-info-box mt-4">
                      <Layers className="text-emerald-400 flex-shrink-0 mr-2" size={18} />
                      <p className="text-sm leading-relaxed">{selectedLetter.description}</p>
                    </div>
                  </>
                )}

                {activeSection === 'cheitap' && (
                  <>
                    <div className="inspect-row">
                      <span className="inspect-label">Vowel Sound</span>
                      <span className="inspect-val font-semibold text-pink-400">
                        /{selectedLetter.sound}/
                      </span>
                    </div>

                    <div className="inspect-row">
                      <span className="inspect-label">Position on Consonant</span>
                      <span className="inspect-val font-semibold text-slate-300 capitalize">
                        {selectedLetter.position}
                      </span>
                    </div>

                    <div className="inspect-info-box mt-4">
                      <Info className="text-pink-400 flex-shrink-0 mr-2" size={18} />
                      <p className="text-sm leading-relaxed">{selectedLetter.description}</p>
                    </div>
                  </>
                )}

                {activeSection === 'digits' && (
                  <>
                    <div className="inspect-row">
                      <span className="inspect-label">Numeral Value</span>
                      <span className="inspect-val font-semibold text-teal-400 text-xl">
                        {selectedLetter.value}
                      </span>
                    </div>

                    <div className="inspect-row">
                      <span className="inspect-label">Manipuri Name</span>
                      <span className="inspect-val font-semibold text-teal-300">
                        {selectedLetter.name.split(' ')[0]}
                      </span>
                    </div>

                    <div className="inspect-info-box mt-4">
                      <Sparkles className="text-teal-400 flex-shrink-0 mr-2" size={18} />
                      <p className="text-sm leading-relaxed">
                        This character represent digit {selectedLetter.value} in the Meitei Mayek numerical system.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Anatomy context message */}
              {activeSection === 'mapung' && (
                <div className="anatomy-connection-footer">
                  <AlertCircle size={14} className="text-slate-400 mr-1 flex-shrink-0" />
                  <span>The script names are rooted in a traditional cosmology equating letters to biological creation (the body).</span>
                </div>
              )}
            </div>
          ) : (
            <div className="no-selection-box">
              <p>Select a letter from the grid to view details, audio pronunciation, and anatomical mappings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
