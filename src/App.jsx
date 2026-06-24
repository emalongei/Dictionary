import React, { useState, useEffect } from 'react';
import { Search, Keyboard, BookOpen, Trophy, Bookmark, Sun, Moon, Sparkles } from 'lucide-react';
import { dictionary } from './data/dictionary';

// Import components
import WordInspector from './components/WordInspector';
import VirtualKeyboard from './components/VirtualKeyboard';
import AlphabetGuide from './components/AlphabetGuide';
import Quiz from './components/Quiz';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWord, setSelectedWord] = useState(dictionary[0]);
  const [bookmarks, setBookmarks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load bookmarks and theme from LocalStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('meitei_bookmarks');
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (e) {
        console.error('Error loading bookmarks', e);
      }
    }

    const savedTheme = localStorage.getItem('meitei_theme');
    if (savedTheme !== null) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      if (!isDark) {
        document.documentElement.classList.add('light-mode');
      }
    }
  }, []);

  // Sync bookmarks to LocalStorage
  const handleToggleBookmark = (word) => {
    let updatedBookmarks;
    if (bookmarks.includes(word.id)) {
      updatedBookmarks = bookmarks.filter((id) => id !== word.id);
    } else {
      updatedBookmarks = [...bookmarks, word.id];
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem('meitei_bookmarks', JSON.stringify(updatedBookmarks));
  };

  // Toggle Theme
  const handleToggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('meitei_theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('meitei_theme', 'light');
    }
  };

  // Handler for searching from virtual keyboard
  const handleKeyboardSearch = (text) => {
    setSearchQuery(text);
    setSelectedCategory('All');
    setActiveTab('search');

    // Find the first word that starts with or contains the search string
    const match = dictionary.find(
      (w) =>
        w.meitei.includes(text) ||
        w.romanized.toLowerCase().includes(text.toLowerCase()) ||
        w.english.toLowerCase().includes(text.toLowerCase())
    );
    if (match) {
      setSelectedWord(match);
    }
  };

  // Filter dictionary based on search query & category filter
  const filteredWords = dictionary.filter((word) => {
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      word.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.romanized.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.meitei.includes(searchQuery) ||
      word.bengali.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // Make sure we select the first matching word if the current selected word is not in the filtered list
  useEffect(() => {
    if (filteredWords.length > 0 && !filteredWords.find((w) => w.id === selectedWord?.id)) {
      setSelectedWord(filteredWords[0]);
    } else if (filteredWords.length === 0) {
      setSelectedWord(null);
    }
  }, [searchQuery, selectedCategory]);

  return (
    <div className="app-container">
      {/* HEADER SECTION */}
      <header className="app-header">
        <div className="brand-section">
          <h1 className="brand-logo-text">ꯃꯩꯇꯩ ꯃꯌꯦꯛ</h1>
          <span className="brand-subtext">Meitei Mayek Dict v1.0</span>
        </div>

        <div className="header-controls">
          {/* Main Navigation Tabs */}
          <nav className="nav-tabs">
            <button
              className={`btn-nav-tab ${activeTab === 'search' ? 'active' : ''}`}
              onClick={() => setActiveTab('search')}
              title="Search Dictionary"
            >
              <Search size={16} />
              <span>Search</span>
            </button>

            <button
              className={`btn-nav-tab ${activeTab === 'keyboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('keyboard')}
              title="Virtual Keyboard"
            >
              <Keyboard size={16} />
              <span>Keyboard</span>
            </button>

            <button
              className={`btn-nav-tab ${activeTab === 'alphabet' ? 'active' : ''}`}
              onClick={() => setActiveTab('alphabet')}
              title="Alphabet Guide"
            >
              <BookOpen size={16} />
              <span>Alphabet</span>
            </button>

            <button
              className={`btn-nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveTab('quiz')}
              title="Practice Quiz"
            >
              <Trophy size={16} />
              <span>Quiz</span>
            </button>

            <button
              className={`btn-nav-tab ${activeTab === 'bookmarks' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookmarks')}
              title="Bookmarked Words"
            >
              <Bookmark size={16} />
              <span>Bookmarks</span>
            </button>
          </nav>

          {/* Theme switch button */}
          <button
            className="btn-theme-toggle"
            onClick={handleToggleTheme}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* MAIN BODY AREA */}
      <main className="main-content">
        
        {/* TAB 1: SEARCH & DICTIONARY */}
        {activeTab === 'search' && (
          <div className="dictionary-grid">
            {/* Sidebar list view */}
            <div className="search-sidebar animate-fade-in">
              <div className="search-input-wrapper">
                <Search className="search-icon-inside" size={18} />
                <input
                  type="text"
                  placeholder="Search by English, Meitei, Romanized..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-bar-input"
                />
              </div>

              {/* Quick Categories Bar */}
              <div className="category-filter-row">
                {['All', 'Greetings', 'Numbers', 'Pronouns', 'Nature', 'Everyday'].map((cat) => (
                  <button
                    key={cat}
                    className={`btn-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Word List Container */}
              <div className="word-list-card">
                <div className="word-list-header">
                  <span>Results ({filteredWords.length})</span>
                  <span>Select to inspect</span>
                </div>
                
                <div className="word-list-results">
                  {filteredWords.length > 0 ? (
                    filteredWords.map((word) => (
                      <div
                        key={word.id}
                        className={`word-item-row ${selectedWord?.id === word.id ? 'selected' : ''}`}
                        onClick={() => setSelectedWord(word)}
                      >
                        <div className="item-left">
                          <span className="item-meitei">{word.meitei}</span>
                          <span className="item-translit">{word.romanized}</span>
                        </div>
                        <div className="item-right">
                          <span className="item-english">{word.english}</span>
                          <span className="item-pos-badge">{word.pos}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-results-box">
                      <p>No words found matching search.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Word details inspector panel */}
            <WordInspector
              word={selectedWord}
              onToggleBookmark={handleToggleBookmark}
              isBookmarked={selectedWord ? bookmarks.includes(selectedWord.id) : false}
            />
          </div>
        )}

        {/* TAB 2: VIRTUAL KEYBOARD */}
        {activeTab === 'keyboard' && (
          <VirtualKeyboard onSearch={handleKeyboardSearch} />
        )}

        {/* TAB 3: ALPHABET GUIDE */}
        {activeTab === 'alphabet' && (
          <AlphabetGuide />
        )}

        {/* TAB 4: QUIZ MODULE */}
        {activeTab === 'quiz' && (
          <Quiz />
        )}

        {/* TAB 5: BOOKMARKS SECTION */}
        {activeTab === 'bookmarks' && (
          <div className="bookmarks-tab-view animate-fade-in">
            <div className="keyboard-header-info mb-6">
              <h2>Your Bookmarked Words</h2>
              <p>Quick access to your saved Manipuri vocabulary for review and revision.</p>
            </div>

            {bookmarks.length > 0 ? (
              <div className="grid-list">
                {dictionary
                  .filter((w) => bookmarks.includes(w.id))
                  .map((word) => (
                    <div
                      key={word.id}
                      className="alphabet-card selected"
                      onClick={() => {
                        setSelectedWord(word);
                        setActiveTab('search');
                      }}
                      title="Click to view details in Dictionary"
                    >
                      <span className="card-glyph">{word.meitei}</span>
                      <span className="card-label">{word.romanized}</span>
                      <span className="card-sub">{word.english}</span>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="inspector-empty">
                <div className="empty-greetings">
                  <Bookmark className="text-slate-500 mb-1" size={32} />
                  <h3>No Bookmarks Yet</h3>
                  <p>When searching the dictionary, click the bookmark icon on any word card to save it here for rapid review.</p>
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Meitei Mayek Script Dictionary. Designed for language learning & preservation.</p>
        <div className="footer-links">
          <a href="https://unicode.org/charts/PDF/UABC0.pdf" target="_blank" rel="noopener noreferrer">Unicode Chart</a>
          <span>•</span>
          <a href="https://en.wikipedia.org/wiki/Meitei_script" target="_blank" rel="noopener noreferrer">About Meitei Mayek</a>
        </div>
      </footer>
    </div>
  );
}
