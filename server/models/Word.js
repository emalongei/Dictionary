import mongoose from 'mongoose';

const breakdownSchema = new mongoose.Schema({
  char: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }
});

const exampleSchema = new mongoose.Schema({
  english: { type: String, required: true },
  romanized: { type: String, required: true },
  meitei: { type: String, required: true }
});

const wordSchema = new mongoose.Schema({
  english: { type: String, required: true },
  romanized: { type: String, required: true },
  meitei: { type: String, required: true },
  bengali: { type: String, required: true },
  category: { type: String, required: true },
  pos: { type: String, required: true },
  definition: { type: String, required: true },
  example: { type: exampleSchema, required: true },
  breakdown: { type: [breakdownSchema], default: [] }
}, {
  timestamps: true
});

// Add text index for fast keyword matching
wordSchema.index({ english: 'text', romanized: 'text', meitei: 'text', bengali: 'text' });

const Word = mongoose.model('Word', wordSchema);

export default Word;
