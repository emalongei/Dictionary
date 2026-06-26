// src/api.js
const API_BASE_URL = 'http://localhost:5173/';

// Fetch all entries with pagination
// src/api.js
export const fetchEntries = async (skip = 0, limit = 100) => {
  const response = await fetch(`${API_BASE_URL}/allentries?skip=${skip}&limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch entries');
  const data = await response.json();

  return data.map(item => ({
    id: item.id,
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
};

// Search entries
export const searchEntries = async (query) => {
  const response = await fetch(`${API_BASE_URL}/search?q=${query}`);
  if (!response.ok) {
    throw new Error('Search failed');
  }
  const data = await response.json();

  // ✅ Same mapping and defaults as fetchEntries
  return data.map(item => ({
    id: item.id,
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
};
// Get single entry by ID
export const getEntry = async (id) => {
  const response = await fetch(`${API_BASE_URL}/entries/${id}`);
  if (!response.ok) {
    throw new Error('Entry not found');
  }
  const data = await response.json();

  return {
    id: data.id,
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
};