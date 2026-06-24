// Meitei Mayek Dictionary Dataset

export const dictionary = [
  {
    id: 'w1',
    english: 'Hello / Greetings',
    romanized: 'Khurumjari',
    meitei: 'ꯈꯨꯔꯨꯝꯖꯔꯤ',
    bengali: 'খুরুমজরি',
    category: 'Greetings',
    pos: 'Interjection',
    definition: 'A respectful greeting used to say hello, pay respects, or offer salutations to someone.',
    example: {
      english: 'Hello, how are you?',
      romanized: 'Khurumjari, kamdoubiri?',
      meitei: 'ꯈꯨꯔꯨꯝꯖꯔꯤ, ꯀꝗꯗꯧꯕꯤꯔꯤ?'
    },
    breakdown: [
      { char: 'ꯈ', name: 'Khou', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯔ', name: 'Ra', type: 'Extended Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯖ', name: 'Ja', type: 'Extended Iyek' },
      { char: 'ꯔ', name: 'Ra', type: 'Extended Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w2',
    english: 'Thank you',
    romanized: 'Thagatchari',
    meitei: 'ꯊꯥꯒꯠꯆꯔꯤ',
    bengali: 'থাগৎচরি',
    category: 'Greetings',
    pos: 'Verb / Phrase',
    definition: 'An expression of gratitude, meaning "I thank you" or "I offer my thanks".',
    example: {
      english: 'Thank you very much for your help.',
      romanized: 'Mateng pangbagingidamak yamna thagatchari.',
      meitei: 'ꯃꯇꯦꯡ ꯄꯥꯡꯕꯒꯤꯗꯃꯛ ꯌꯥꯝꯅ ꯊꯥꯒꯠꯆꯔꯤ꯫'
    },
    breakdown: [
      { char: 'ꯊ', name: 'Thou', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯒ', name: 'Gok (voiced)', type: 'Extended Iyek' },
      { char: 'ꯠ', name: 'Til Lonsum', type: 'Lonsum Iyek (Final Consonant /t/)' },
      { char: 'ꯆ', name: 'Chil', type: 'Mapung Iyek' },
      { char: 'ꯔ', name: 'Ra', type: 'Extended Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w3',
    english: 'Yes',
    romanized: 'Hoi',
    meitei: 'ꯍꯣꯏ',
    bengali: 'হৈ / হোই',
    category: 'Common',
    pos: 'Adverb / Particle',
    definition: 'Affirmative response or agreement, meaning yes.',
    example: {
      english: 'Yes, that is correct.',
      romanized: 'Hoi, adum achumbani.',
      meitei: 'ꯍꯣꯏ, ꯑꯗꯨꯝ ꯑꯆꯨꯝꯕꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯍ', name: 'Huk', type: 'Mapung Iyek' },
      { char: 'ꯣ', name: 'O-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯏ', name: 'Ee', type: 'Mapung Iyek' }
    ]
  },
  {
    id: 'w4',
    english: 'No',
    romanized: 'Natte',
    meitei: 'ꯅꯠꯇꯦ',
    bengali: 'নত্তে',
    category: 'Common',
    pos: 'Adverb / Particle',
    definition: 'Negative particle or disagreement, indicating "no" or "it is not".',
    example: {
      english: 'No, I did not go.',
      romanized: 'Natte, ei chatkhihoudre.',
      meitei: 'ꯅꯠꯇꯦ, ꯑꯩ ꯆꯠꯈꯤꯍꯧꯗ꯭ꯔꯦ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯠ', name: 'Til Lonsum', type: 'Lonsum Iyek (Final Consonant /t/)' },
      { char: 'ꯇ', name: 'Til', type: 'Mapung Iyek' },
      { char: 'ꯦ', name: 'E-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w5',
    english: 'Friend',
    romanized: 'Marup',
    meitei: 'ꯃꯔꯨꯄ',
    bengali: 'মরুপ',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'A companion, partner, or associate whom one knows and has a bond of mutual affection with.',
    example: {
      english: 'He is my best friend.',
      romanized: 'Mahak eigi khwaidegi nungshiba marupni.',
      meitei: 'ꯃꯍꯥꯛ ꯑꯩꯒꯤ ꯈ꯭ꯋꯥꯏꯗꯦꯒꯤ ꯅꯨꯡꯁꯤꯕ ꯃꯔꯨꯄꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯔ', name: 'Ra', type: 'Extended Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapung Iyek' }
    ]
  },
  {
    id: 'w6',
    english: 'Beautiful',
    romanized: 'Phajei',
    meitei: 'ꯐꯖꯩ',
    bengali: 'ফজৈ',
    category: 'Everyday',
    pos: 'Adjective',
    definition: 'Aesthetically pleasing to the senses or mind; lovely, handsome, or pretty.',
    example: {
      english: 'This flower is very beautiful.',
      romanized: 'Lei asi yamna phajei.',
      meitei: 'ꯂꯩ ꯑꯁꯤ ꯌꯥꯝꯅ ꯐꯖꯩ꯫'
    },
    breakdown: [
      { char: 'ꯐ', name: 'Pham', type: 'Mapung Iyek' },
      { char: 'ꯖ', name: 'Ja', type: 'Extended Iyek' },
      { char: 'ꯩ', name: 'Ei-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w7',
    english: 'Love',
    romanized: 'Nungshi',
    meitei: 'ꯅꯨꯡꯁꯤ',
    bengali: 'নুংশি',
    category: 'Everyday',
    pos: 'Noun / Verb',
    definition: 'An intense feeling of deep affection, or to feel deep affection for someone or something.',
    example: {
      english: 'I love Manipur.',
      romanized: 'Ei Manipur nungshi.',
      meitei: 'ꯑꯩ ꯃꯅꯤꯄꯨꯔ ꯅꯨꯡꯁꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯡ', name: 'Ngou Lonsum', type: 'Lonsum Iyek (Final Consonant /ng/)' },
      { char: 'ꯁ', name: 'Sam', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w8',
    english: 'Water',
    romanized: 'Ising',
    meitei: 'ꯏꯁꯤꯡ',
    bengali: 'ইশিং',
    category: 'Nature',
    pos: 'Noun',
    definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.',
    example: {
      english: 'Give me some water to drink.',
      romanized: 'Thaknaba ising khara thabiyu.',
      meitei: 'ꯊꯛꯅꯕ ꯏꯁꯤꯡ ꯈꯔꯥ ꯊꯥꯕꯤꯌꯨ꯫'
    },
    breakdown: [
      { char: 'ꯏ', name: 'Ee', type: 'Mapung Iyek' },
      { char: 'ꯁ', name: 'Sam', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯡ', name: 'Ngou Lonsum', type: 'Lonsum Iyek (Final Consonant /ng/)' }
    ]
  },
  {
    id: 'w9',
    english: 'Fire',
    romanized: 'Mei',
    meitei: 'ꯃꯩ',
    bengali: 'মৈ / মাই',
    category: 'Nature',
    pos: 'Noun',
    definition: 'Combustion or burning, in which substances combine chemically with oxygen from the air and typically give out bright light, heat, and smoke.',
    example: {
      english: 'The fire is very hot.',
      romanized: 'Mei asi yamna asaubani.',
      meitei: 'ꯃꯩ ꯑꯁꯤ ꯌꯥꯝꯅ ꯑꯁꯥꯎꯕꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯩ', name: 'Ei-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w10',
    english: 'Sun',
    romanized: 'Numit',
    meitei: 'ꯅꯨꯃꯤꯠ',
    bengali: 'নুমিৎ',
    category: 'Nature',
    pos: 'Noun',
    definition: 'The star around which the earth orbits, representing daylight and the cycle of a day.',
    example: {
      english: 'The sun rises in the east.',
      romanized: 'Numit nongpokta thok-i.',
      meitei: 'ꯅꯨꯃꯤꯠ ꯅꯣꯡꯄꯣꯛꯇ ꯊꯣꯛꯏ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯠ', name: 'Til Lonsum', type: 'Lonsum Iyek (Final Consonant /t/)' }
    ]
  },
  {
    id: 'w11',
    english: 'Moon / Month',
    romanized: 'Tha',
    meitei: 'ꯊꯥ',
    bengali: 'থা',
    category: 'Nature',
    pos: 'Noun',
    definition: 'The natural satellite of the earth, visible by reflected sunlight; also signifies a calendar month.',
    example: {
      english: 'The moon is shining bright tonight.',
      romanized: 'Ngaasigi thahanba yamna mangal chei.',
      meitei: 'ꯉꯥꯁꯤꯒꯤ ꯊꯥꯍꯟꯕ ꯌꯥꯝꯅ ꯃꯉꯥꯜ ꯆꯩ꯫'
    },
    breakdown: [
      { char: 'ꯊ', name: 'Thou', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w12',
    english: 'Man',
    romanized: 'Nupa',
    meitei: 'ꯅꯨꯄꯥ',
    bengali: 'নুপা',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'An adult male human being; also refers generally to male species.',
    example: {
      english: 'That man is a doctor.',
      romanized: 'Nupa adu daktar amani.',
      meitei: 'ꯅꯨꯄꯥ ꯑꯗꯨ ꯗꯥꯛꯇꯔ ꯑꯃꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w13',
    english: 'Woman',
    romanized: 'Nupi',
    meitei: 'ꯅꯨꯄꯤ',
    bengali: 'নুপি',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'An adult female human being; also refers generally to female species.',
    example: {
      english: 'She is a hard-working woman.',
      romanized: 'Mahak yamna hotnaba nupini.',
      meitei: 'ꯃꯍꯥꯛ ꯌꯥꯝꯅ ꯍꯣꯠꯅꯕ ꯅꯨꯄꯤꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w14',
    english: 'River',
    romanized: 'Turen',
    meitei: 'ꯇꯨꯔꯦꯟ',
    bengali: 'তুরেন',
    category: 'Nature',
    pos: 'Noun',
    definition: 'A large natural stream of water flowing in a channel to the sea, a lake, or another river.',
    example: {
      english: 'The Imphal River flows through the city.',
      romanized: 'Imphal turen sahar asigi mayolda chen-i.',
      meitei: 'ꯏꯝꯐꯥꯜ ꯇꯨꯔꯦꯟ ꯁꯍꯔ ꯑꯁꯤꯒꯤ ꯃꯌꯣꯜꯗ ꯆꯦꯟꯏ꯫'
    },
    breakdown: [
      { char: 'ꯇ', name: 'Til', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯔ', name: 'Ra', type: 'Extended Iyek' },
      { char: 'ꯦ', name: 'E-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯟ', name: 'Na Lonsum', type: 'Lonsum Iyek (Final Consonant /n/)' }
    ]
  },
  {
    id: 'w15',
    english: 'Mountain / Hill',
    romanized: 'Ching',
    meitei: 'ꯆꯤꯡ',
    bengali: 'চিং',
    category: 'Nature',
    pos: 'Noun',
    definition: 'A large natural elevation of the earth\'s surface rising abruptly from the surrounding level; a hill.',
    example: {
      english: 'The mountains of Manipur are beautiful.',
      romanized: 'Manipur gi ching singyamna phajei.',
      meitei: 'ꯃꯅꯤꯄꯨꯔ ꯒꯤ ꯆꯤꯡ ꯁꯤꯡꯌꯥꯝꯅ ꯐꯖꯩ꯫'
    },
    breakdown: [
      { char: 'ꯆ', name: 'Chil', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯡ', name: 'Ngou Lonsum', type: 'Lonsum Iyek (Final Consonant /ng/)' }
    ]
  },
  {
    id: 'w16',
    english: 'House / Home',
    romanized: 'Yum',
    meitei: 'ꯌꯨꯝ',
    bengali: 'য়ুম',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'A building for human habitation, especially one that is lived in by a family.',
    example: {
      english: 'This is my house.',
      romanized: 'Asi eigi yumni.',
      meitei: 'ꯑꯁꯤ ꯑꯩꯒꯤ ꯌꯨꯝꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯌ', name: 'Yang', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯝ', name: 'Mit Lonsum', type: 'Lonsum Iyek (Final Consonant /m/)' }
    ]
  },
  {
    id: 'w17',
    english: 'Food',
    romanized: 'Chinjak',
    meitei: 'ꯆꯤꯟꯖꯥꯛ',
    bengali: 'চিনজাক',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'Any nutritious substance that people or animals eat or drink, or that plants absorb, to maintain life and growth.',
    example: {
      english: 'We need healthy food.',
      romanized: 'Eikhoigi haokaba chinjak chang-i.',
      meitei: 'ꯑꯩꯈꯣꯏꯒꯤ ꯍꯥꯎꯀꯕ ꯆꯤꯟꯖꯥꯛ ꯆꯪꯏ꯫'
    },
    breakdown: [
      { char: 'ꯆ', name: 'Chil', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯟ', name: 'Na Lonsum', type: 'Lonsum Iyek (Final Consonant /n/)' },
      { char: 'ꯖ', name: 'Ja', type: 'Extended Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯛ', name: 'Kok Lonsum', type: 'Lonsum Iyek (Final Consonant /k/)' }
    ]
  },
  {
    id: 'w18',
    english: 'Flower',
    romanized: 'Lei',
    meitei: 'ꯂꯩ',
    bengali: 'লৈ',
    category: 'Nature',
    pos: 'Noun',
    definition: 'The seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla.',
    example: {
      english: 'The garden has many flowers.',
      romanized: 'Lel-kol asida lei yamna lei.',
      meitei: 'ꯂꯩꯀꯣꯜ ꯑꯁꯤꯗ ꯂꯩ ꯌꯥꯝꯅ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯂ', name: 'Lai', type: 'Mapung Iyek' },
      { char: 'ꯩ', name: 'Ei-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w19',
    english: 'I / Me',
    romanized: 'Ei',
    meitei: 'ꯑꯩ',
    bengali: 'অৈ / ওই',
    category: 'Pronoun',
    pos: 'Pronoun',
    definition: 'Used by a speaker to refer to himself or herself.',
    example: {
      english: 'I am a student.',
      romanized: 'Ei maheiroi amani.',
      meitei: 'ꯑꯩ ꯃꯍꯩꯔꯣꯏ ꯑꯃꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapung Iyek' },
      { char: 'ꯩ', name: 'Ei-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w20',
    english: 'You',
    romanized: 'Nang',
    meitei: 'ꯅꯪ',
    bengali: 'নং',
    category: 'Pronoun',
    pos: 'Pronoun',
    definition: 'Used to refer to the person or people that the speaker is addressing.',
    example: {
      english: 'Where are you going?',
      romanized: 'Nang kadaida chatlige?',
      meitei: 'ꯅꯪ ꯀꯗꯥꯏꯗ ꯆꯠꯂꯤꯒꯦ?'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯪ', name: 'Nung', type: 'Cheitap (Nasalization dot)' }
    ]
  },
  {
    id: 'w21',
    english: 'One (Number)',
    romanized: 'Ama',
    meitei: 'ꯑꯃꯥ',
    bengali: 'অমা',
    category: 'Numbers',
    pos: 'Noun / Numeral',
    definition: 'The number 1 or a single unit.',
    example: {
      english: 'Give me one book.',
      romanized: 'Eigi lairik ama piyu.',
      meitei: 'ꯑꯩꯒꯤ ꯂꯥꯏꯔꯤꯛ ꯑꯃꯥ ꯄꯤꯌꯨ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapung Iyek' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w22',
    english: 'Two (Number)',
    romanized: 'Ani',
    meitei: 'ꯑꯅꯤ',
    bengali: 'অনি',
    category: 'Numbers',
    pos: 'Noun / Numeral',
    definition: 'The number 2 or a couple of units.',
    example: {
      english: 'I have two pens.',
      romanized: 'Eigi khut-lai ani lei.',
      meitei: 'ꯑꯩꯒꯤ ꯈꯨꯠꯂꯥꯏ ꯑꯅꯤ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapung Iyek' },
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w23',
    english: 'Three (Number)',
    romanized: 'Ahum',
    meitei: 'ꯑꯍꯨꯝ',
    bengali: 'অহুম',
    category: 'Numbers',
    pos: 'Noun / Numeral',
    definition: 'The number 3.',
    example: {
      english: 'There are three cups.',
      romanized: 'Adukom ahum lei.',
      meitei: 'ꯑꯗꯨꯀꯣꯝ ꯑꯍꯨꯝ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapung Iyek' },
      { char: 'ꯍ', name: 'Huk', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯝ', name: 'Mit Lonsum', type: 'Lonsum Iyek (Final Consonant /m/)' }
    ]
  },
  {
    id: 'w24',
    english: 'Four (Number)',
    romanized: 'Mari',
    meitei: 'ꯃꯔꯤ',
    bengali: 'মরি',
    category: 'Numbers',
    pos: 'Noun / Numeral',
    definition: 'The number 4.',
    example: {
      english: 'Four chairs are in the room.',
      romanized: 'Ka asida chauki mari lei.',
      meitei: 'ꯀꯥ ꯑꯁꯤꯗ ꯆꯧꯀꯤ ꯃꯔꯤ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯔ', name: 'Ra', type: 'Extended Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w25',
    english: 'Five (Number)',
    romanized: 'Manga',
    meitei: 'ꯃꯉꯥ',
    bengali: 'মঙা',
    category: 'Numbers',
    pos: 'Noun / Numeral',
    definition: 'The number 5.',
    example: {
      english: 'Five fingers are on a hand.',
      romanized: 'Khutni khutyen manga lei.',
      meitei: 'ꯈꯨꯠꯅꯤ ꯈꯨꯠꯌꯦꯟ ꯃꯉꯥ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯉ', name: 'Ngou', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w26',
    english: 'Mother',
    romanized: 'Ima',
    meitei: 'ꯏꯃꯥ',
    bengali: 'ইমা',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'A female parent; mother.',
    example: {
      english: 'My mother is cooking.',
      romanized: 'Eigi ima chak thongli.',
      meitei: 'ꯑꯩꯒꯤ ꯏꯃꯥ ꯆꯥꯛ ꯊꯣꯡꯂꯤ꯫'
    },
    breakdown: [
      { char: 'ꯏ', name: 'Ee', type: 'Mapung Iyek' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w27',
    english: 'Father',
    romanized: 'Ipa',
    meitei: 'ꯏꯄꯥ',
    bengali: 'ইপা',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'A male parent; father.',
    example: {
      english: 'My father is a teacher.',
      romanized: 'Eigi ipa oja amani.',
      meitei: 'ꯑꯩꯒꯤ ꯏꯄꯥ ꯑꯣꯖꯥ ꯑꯃꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯏ', name: 'Ee', type: 'Mapung Iyek' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w28',
    english: 'Sky',
    romanized: 'Atiya',
    meitei: 'ꯑꯇꯤꯌꯥ',
    bengali: 'অতিয়া',
    category: 'Nature',
    pos: 'Noun',
    definition: 'The region of the atmosphere and outer space seen from the earth.',
    example: {
      english: 'The sky is blue today.',
      romanized: 'Atiya asi ngasi yamna ningshang-i.',
      meitei: 'ꯑꯇꯤꯌꯥ ꯑꯁꯤ ꯉꯥꯁꯤ ꯌꯥꯝꯅ ꯅꯤꯡꯁꯪꯏ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapung Iyek' },
      { char: 'ꯇ', name: 'Til', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯌ', name: 'Yang', type: 'Mapung Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w29',
    english: 'Wind / Air',
    romanized: 'Nungshit',
    meitei: 'ꯅꯨꯡꯁꯤꯠ',
    bengali: 'নুংশিৎ',
    category: 'Nature',
    pos: 'Noun',
    definition: 'The perceptible natural movement of the air, especially in the form of a current of air blowing through the environment.',
    example: {
      english: 'Cool wind is blowing.',
      romanized: 'Yingba nungshit ama thongli.',
      meitei: 'ꯌꯤꯡꯕ ꯅꯨꯡꯁꯤꯠ ꯑꯃꯥ ꯊꯣꯡꯂꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapung Iyek' },
      { char: 'ꯨ', name: 'U-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯡ', name: 'Ngou Lonsum', type: 'Lonsum Iyek (Final Consonant /ng/)' },
      { char: 'ꯁ', name: 'Sam', type: 'Mapung Iyek' },
      { char: 'ꯤ', name: 'I-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯠ', name: 'Til Lonsum', type: 'Lonsum Iyek (Final Consonant /t/)' }
    ]
  },
  {
    id: 'w30',
    english: 'Teacher',
    romanized: 'Oja',
    meitei: 'ꯑꯣꯖꯥ',
    bengali: 'ওজা',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'A person who teaches, especially in a school or college.',
    example: {
      english: 'Our teacher explains very well.',
      romanized: 'Eikhoigi ojana khanghanba yamna phajei.',
      meitei: 'ꯑꯩꯈꯣꯏꯒꯤ ꯑꯣꯖꯥꯅ ꯈꯪꯍꯟꯕ ꯌꯥꯝꯅ ꯐꯖꯩ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapung Iyek' },
      { char: 'ꯣ', name: 'O-cheitap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯖ', name: 'Ja', type: 'Extended Iyek' },
      { char: 'ꯥ', name: 'Aa-cheitap', type: 'Cheitap (Vowel Modifier)' }
    ]
  }
];
