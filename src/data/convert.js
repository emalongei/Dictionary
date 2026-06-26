import fs from 'fs';
import {
  mapungIyek,
  lonsumIyek,
  cheitaps,
  digits
} from './alphabet.js';

const data = {
  mapungIyek,
  lonsumIyek,
  cheitaps,
  digits
};

fs.writeFileSync(
  'meitei-mayek.json',
  JSON.stringify(data, null, 2),
  'utf8'
);

console.log('JSON file created!');