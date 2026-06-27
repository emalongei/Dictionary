// src/api.js
<<<<<<< HEAD
const API_BASE_URL = import.meta.env.VITE_API_URL;
=======
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

console.log('📡 API_BASE_URL:', API_BASE_URL);
>>>>>>> 9faa4c4aaa0dd6ddd330be99b3de84b35651110f

// Fetch all entries with pagination
export const fetchEntries = async (skip = 0, limit = 100) => {
  try {
    const url = `${API_BASE_URL}/allentries?skip=${skip}&limit=${limit}`;
    console.log('🌐 fetchEntries URL:', url);
    
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch entries: ${response.status}`);
    const data = await response.json();

    return data.map(item => ({
      id: item.id || item._id,
      english: item.English || '',
      meitei: item.Meiteilon || '',
      romanized: item.LatinScript || '',
      category: item.category || 'Uncategorized',
      pos: item.pos || 'Noun',
      bengali: item.bengali || '',
      definition: item.definition || 'No definition available.',
      breakdown: item.breakdown || [{ char: item.Meiteilon?.[0] || '?', name: 'Unknown' }],
      example: {
        meitei: item.example?.meitei || 'Example not available',
        romanized: item.example?.romanized || '',
        english: item.example?.english || '',
      }
    }));
  } catch (error) {
    console.error('❌ fetchEntries error:', error);
    throw error;
  }
};

// Search entries
export const searchEntries = async (query) => {
  try {
    const url = `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`;
    console.log('🌐 searchEntries URL:', url);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Search failed: ${response.status}`);
    }
    const data = await response.json();

    return data.map(item => ({
      id: item.id || item._id,
      english: item.English || '',
      meitei: item.Meiteilon || '',
      romanized: item.LatinScript || '',
      category: item.category || 'Uncategorized',
      pos: item.pos || 'Noun',
      bengali: item.bengali || '',
      definition: item.definition || 'No definition available.',
      breakdown: item.breakdown || [{ char: item.Meiteilon?.[0] || '?', name: 'Unknown' }],
      example: {
        meitei: item.example?.meitei || 'Example not available',
        romanized: item.example?.romanized || '',
        english: item.example?.english || '',
      }
    }));
  } catch (error) {
    console.error('❌ searchEntries error:', error);
    throw error;
  }
};

// Get single entry by ID
export const getEntry = async (id) => {
  try {
    const url = `${API_BASE_URL}/entries/${id}`;
    console.log('🌐 getEntry URL:', url);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Entry not found: ${response.status}`);
    }
    const data = await response.json();

    return {
      id: data.id || data._id,
      english: data.English || '',
      meitei: data.Meiteilon || '',
      romanized: data.LatinScript || '',
      category: data.category || 'Uncategorized',
      pos: data.pos || 'Noun',
      bengali: data.bengali || '',
      definition: data.definition || 'No definition available.',
      breakdown: data.breakdown || [{ char: data.Meiteilon?.[0] || '?', name: 'Unknown' }],
      example: {
        meitei: data.example?.meitei || 'Example not available',
        romanized: data.example?.romanized || '',
        english: data.example?.english || '',
      }
    };
  } catch (error) {
    console.error('❌ getEntry error:', error);
    throw error;
  }
};