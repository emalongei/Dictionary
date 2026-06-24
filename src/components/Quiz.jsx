import React, { useState, useEffect } from 'react';
import { Award, RefreshCw, CheckCircle2, XCircle, ChevronRight, Play, ArrowLeft, Trophy } from 'lucide-react';
import { mapungIyek } from '../data/alphabet';
import { dictionary } from '../data/dictionary';

export default function Quiz() {
  const [quizMode, setQuizMode] = useState(null); // null, 'letters', 'words', 'engToScript'
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScores, setHighScores] = useState({
    letters: 0,
    words: 0,
    engToScript: 0
  });
  
  // Game states
  const [questionData, setQuestionData] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Load high scores from LocalStorage
  useEffect(() => {
    const savedScores = localStorage.getItem('meitei_quiz_highscores');
    if (savedScores) {
      try {
        setHighScores(JSON.parse(savedScores));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save high scores to LocalStorage
  const saveHighScore = (mode, finalScore) => {
    setHighScores((prev) => {
      const updated = {
        ...prev,
        [mode]: Math.max(prev[mode] || 0, finalScore)
      };
      localStorage.setItem('meitei_quiz_highscores', JSON.stringify(updated));
      return updated;
    });
  };

  // Helper to get random elements from array
  const getRandomItems = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Generate question based on active mode
  const generateQuestion = (mode) => {
    if (mode === 'letters') {
      // Pick a random letter from Mapung Iyek
      const target = getRandomItems(mapungIyek, 1)[0];
      // Pick 3 distractors
      const distractors = mapungIyek
        .filter((item) => item.name !== target.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const allOptions = [target, ...distractors].sort(() => 0.5 - Math.random());
      
      setQuestionData({
        prompt: target.character,
        correctValue: target.name,
        extraInfo: `Represents: ${target.meaning}`
      });
      setOptions(allOptions.map(o => o.name));
    } else if (mode === 'words') {
      // Pick a random word from dictionary
      const target = getRandomItems(dictionary, 1)[0];
      // Pick 3 distractors
      const distractors = dictionary
        .filter((item) => item.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const allOptions = [target, ...distractors].sort(() => 0.5 - Math.random());
      
      setQuestionData({
        prompt: target.meitei,
        correctValue: target.english,
        extraInfo: `Pronounced: ${target.romanized}`
      });
      setOptions(allOptions.map(o => o.english));
    } else if (mode === 'engToScript') {
      // Pick a random word from dictionary (prompt English, answer Meitei)
      const target = getRandomItems(dictionary, 1)[0];
      // Pick 3 distractors
      const distractors = dictionary
        .filter((item) => item.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const allOptions = [target, ...distractors].sort(() => 0.5 - Math.random());
      
      setQuestionData({
        prompt: target.english,
        correctValue: target.meitei,
        extraInfo: `Spelled in Roman: ${target.romanized}`
      });
      setOptions(allOptions.map(o => o.meitei));
    }
    
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const startQuiz = (mode) => {
    setQuizMode(mode);
    setCurrentQuestion(1);
    setScore(0);
    setQuizFinished(false);
    generateQuestion(mode);
  };

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === questionData.correctValue) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentQuestion >= 10) {
      setQuizFinished(true);
      saveHighScore(quizMode, score + (selectedOption === questionData.correctValue ? 1 : 0));
    } else {
      setCurrentQuestion(prev => prev + 1);
      generateQuestion(quizMode);
    }
  };

  const quitQuiz = () => {
    setQuizMode(null);
    setQuizFinished(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  // If in selection mode
  if (!quizMode) {
    return (
      <div className="quiz-selection-container">
        <div className="quiz-intro-hero">
          <Trophy className="text-amber-400 mb-2 animate-bounce" size={48} />
          <h2>Meitei Mayek Interactive Quiz</h2>
          <p>Test your knowledge, build your learning streak, and master the traditional Manipuri script.</p>
        </div>

        <div className="highscores-panel">
          <div className="panel-header">
            <span>Your High Scores</span>
          </div>
          <div className="scores-grid">
            <div className="score-stat-card">
              <span className="stat-label">Letters Quiz</span>
              <span className="stat-val text-violet-400">{highScores.letters}/10</span>
            </div>
            <div className="score-stat-card">
              <span className="stat-label">Word Translation</span>
              <span className="stat-val text-emerald-400">{highScores.words}/10</span>
            </div>
            <div className="score-stat-card">
              <span className="stat-label">English to Script</span>
              <span className="stat-val text-pink-400">{highScores.engToScript}/10</span>
            </div>
          </div>
        </div>

        <div className="quiz-modes-grid">
          <div className="quiz-mode-card border-violet-500/25 hover:border-violet-500">
            <span className="mode-badge bg-violet-900/50 text-violet-300">Basic Alphabet</span>
            <h3>Letter Names Quiz</h3>
            <p>Look at the Meitei Mayek character and identify its name (e.g. Kok, Sam, Lai, Mit).</p>
            <button className="btn-mode-start bg-violet-600 hover:bg-violet-500" onClick={() => startQuiz('letters')}>
              <Play size={16} className="mr-2" /> Start Quiz
            </button>
          </div>

          <div className="quiz-mode-card border-emerald-500/25 hover:border-emerald-500">
            <span className="mode-badge bg-emerald-900/50 text-emerald-300">Words (Reading)</span>
            <h3>Word Translation Quiz</h3>
            <p>Translate Meitei Mayek words to their English meanings (e.g., ꯏꯁꯤꯡ &rarr; Water).</p>
            <button className="btn-mode-start bg-emerald-600 hover:bg-emerald-500" onClick={() => startQuiz('words')}>
              <Play size={16} className="mr-2" /> Start Quiz
            </button>
          </div>

          <div className="quiz-mode-card border-pink-500/25 hover:border-pink-500">
            <span className="mode-badge bg-pink-900/50 text-pink-300">Words (Writing)</span>
            <h3>English to Script Quiz</h3>
            <p>Look at the English word and choose its correct Meitei Mayek spelling (e.g. Water &rarr; ꯏꯁꯤꯡ).</p>
            <button className="btn-mode-start bg-pink-600 hover:bg-pink-500" onClick={() => startQuiz('engToScript')}>
              <Play size={16} className="mr-2" /> Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Summary finish screen
  if (quizFinished) {
    const rate = (score / 10) * 100;
    let badgeText = 'Keep Practicing!';
    let ratingColor = 'text-slate-400';
    if (rate >= 90) {
      badgeText = 'Meitei Mayek Legend!';
      ratingColor = 'text-amber-400';
    } else if (rate >= 70) {
      badgeText = 'Excellent Scholar!';
      ratingColor = 'text-indigo-400';
    } else if (rate >= 50) {
      badgeText = 'Developing Writer!';
      ratingColor = 'text-emerald-400';
    }

    return (
      <div className="quiz-finished-panel">
        <Award className={`${ratingColor} w-20 h-20 mb-2 animate-pulse`} />
        <h2>Quiz Completed!</h2>
        <span className={`finished-badge ${ratingColor}`}>{badgeText}</span>
        
        <div className="final-score-box">
          <span className="final-lbl">Your Score</span>
          <span className="final-val">{score} / 10</span>
          <span className="percentage">({rate}%)</span>
        </div>

        <div className="finished-actions-row">
          <button className="btn-finish-nav" onClick={quitQuiz}>
            <ArrowLeft size={16} className="mr-1" /> Quiz Selection
          </button>
          <button className="btn-finish-nav action-primary" onClick={() => startQuiz(quizMode)}>
            <RefreshCw size={16} className="mr-1" /> Play Again
          </button>
        </div>
      </div>
    );
  }

  // Active question screen
  return (
    <div className="quiz-active-panel">
      {/* Top Status Bar */}
      <div className="quiz-status-bar">
        <button className="btn-quit" onClick={quitQuiz} title="Exit Quiz">
          <ArrowLeft size={16} /> Exit
        </button>

        <span className="quiz-progress-text">
          Question <strong>{currentQuestion}</strong> of <strong>10</strong>
        </span>

        <div className="streak-badge-container">
          {streak > 0 && (
            <span className="streak-badge">
              🔥 {streak} Streak
            </span>
          )}
          <span className="score-live-badge">Score: {score}</span>
        </div>
      </div>

      {/* Progress Line */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${(currentQuestion / 10) * 100}%` }}
        />
      </div>

      {/* Question Prompt Card */}
      <div className="question-prompt-card">
        <span className="prompt-label">Identify this:</span>
        <h1 className="prompt-text meitei-script">{questionData?.prompt}</h1>
        {isAnswered && questionData?.extraInfo && (
          <span className="prompt-hint animate-fade-in">{questionData.extraInfo}</span>
        )}
      </div>

      {/* Choices Grid */}
      <div className="quiz-choices-grid">
        {options.map((option, idx) => {
          let btnClass = 'choice-btn';
          let icon = null;

          if (isAnswered) {
            if (option === questionData.correctValue) {
              btnClass += ' correct';
              icon = <CheckCircle2 size={18} className="text-emerald-400" />;
            } else if (option === selectedOption) {
              btnClass += ' incorrect';
              icon = <XCircle size={18} className="text-red-400" />;
            } else {
              btnClass += ' disabled';
            }
          } else {
            btnClass += ' hoverable';
          }

          return (
            <button 
              key={idx} 
              className={btnClass}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
            >
              <span className="choice-text meitei-script">{option}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Footer / Navigation */}
      <div className="quiz-footer-actions">
        {isAnswered && (
          <button className="btn-next-question animate-fade-in" onClick={handleNext}>
            {currentQuestion >= 10 ? 'View Results' : 'Next Question'}
            <ChevronRight size={18} className="ml-1" />
          </button>
        )}
      </div>
    </div>
  );
}
