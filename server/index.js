import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';

import { connectDB } from './config/db.js';
import Word from './models/Word.js';
import { seedWords } from './data/seedData.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Auto-seeding function
const seedDatabase = async () => {
  try {
    const count = await Word.countDocuments();
    if (count === 0) {
      console.log('Word collection is empty. Auto-seeding default 30 Meitei Mayek words...');
      await Word.insertMany(seedWords);
      console.log('Database seeded successfully!');
    } else {
      console.log(`Database already has ${count} words. Skipping seeding.`);
    }
  } catch (error) {
    console.error(`Seeding database failed: ${error.message}`);
  }
};

// Execute seeding
seedDatabase();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/words', async (req, res) => {
  try {
    const { q, category } = req.query;
    let filter = {};

    if (category && category !== 'All') {
      filter.category = category;
    }

    if (q) {
      filter.$or = [
        { english: { $regex: q, $options: 'i' } },
        { romanized: { $regex: q, $options: 'i' } },
        { meitei: { $regex: q, $options: 'i' } },
        { bengali: { $regex: q, $options: 'i' } }
      ];
    }

    const words = await Word.find(filter).sort({ romanized: 1 });
    res.json(words);
  } catch (error) {
    console.error(`Error in GET /api/words: ${error.message}`);
    res.status(500).json({ error: 'Failed to fetch words' });
  }
});

app.post('/api/words', async (req, res) => {
  try {
    const wordData = req.body;
    
    // Basic validation
    const requiredFields = ['english', 'romanized', 'meitei', 'bengali', 'category', 'pos', 'definition', 'example'];
    for (const field of requiredFields) {
      if (!wordData[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    const newWord = new Word(wordData);
    await newWord.save();
    console.log(`Successfully added word: ${newWord.romanized} (${newWord.meitei})`);
    res.status(201).json(newWord);
  } catch (error) {
    console.error(`Error in POST /api/words: ${error.message}`);
    res.status(500).json({ error: 'Failed to add word to database' });
  }
});

// Serve frontend build static files in production
const __dirname = path.resolve();
const distPath = path.join(__dirname, '../dist');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
