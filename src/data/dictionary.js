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
      romanized: 'Khurumjari, kamdoubiribage?',
      meitei: 'ꯈꯨꯔꯨꯝꯖꯔꯤ, ꯀꯝꯗꯧꯕꯤꯔꯤꯕꯒꯦ?'
    },
    breakdown: [
      { char: 'ꯈ', name: 'Khou', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯔ', name: 'Rai', type: 'Extended Iyek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯝ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯖ', name: 'Jil', type: 'Extended Iyek' },
      { char: 'ꯔ', name: 'Rai', type: 'Extended Iyek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Mateng pangbibagidamak yamna thagatchari.',
      meitei: 'ꯃꯇꯦꯡ ꯄꯥꯡꯕꯤꯕꯒꯤꯗꯃꯛ ꯌꯥꯝꯅ ꯊꯥꯒꯠꯆꯔꯤ꯫'
    },
    breakdown: [
      { char: 'ꯊ', name: 'Thou', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯒ', name: 'Gok (voiced)', type: 'Extended Iyek' },
      { char: 'ꯠ', name: 'Til Lonsum', type: 'Lonsum Iyek (Final Consonant /t/)' },
      { char: 'ꯆ', name: 'Chil', type: 'Mapum mayek' },
      { char: 'ꯔ', name: 'Rai', type: 'Extended Iyek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Hoi, madu achumbani.',
      meitei: 'ꯍꯣꯏ, ꯃꯗꯨ ꯑꯆꯨꯝꯕꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯍ', name: 'Huk', type: 'Mapum mayek' },
      { char: 'ꯣ', name: 'Onap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯏ', name: 'Ee', type: 'Mapum mayek' }
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
      romanized: 'Natte, ei chatkhide.',
      meitei: 'ꯅꯠꯇꯦ, ꯑꯩ ꯆꯠꯈꯤꯗꯦ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯠ', name: 'Til Lonsum', type: 'Lonsum Iyek (Final Consonant /t/)' },
      { char: 'ꯇ', name: 'Til', type: 'Mapum mayek' },
      { char: 'ꯦ', name: 'yenap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w5',
    english: 'Friend',
    romanized: 'Marup',
    meitei: 'ꯃꯔꯨꯞ',
    bengali: 'মরুপ',
    category: 'Everyday',
    pos: 'Noun',
    definition: 'A companion, partner, or associate whom one knows and has a bond of mutual affection with.',
    example: {
      english: 'He is my best friend.',
      romanized: 'Mahak asi eigi khwaidagi luna tinnaba marupni.',
      meitei: 'ꯃꯍꯥꯛ ꯑꯩꯒꯤ ꯈ꯭ꯋꯥꯏꯗꯒꯤ ꯂꯨꯅ ꯇꯤꯟꯅꯕ ꯃꯔꯨꯞꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯔ', name: 'Rai', type: 'Extended Iyek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯞ', name: 'Pa-lonsum', type: 'Mapum mayek' }
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
      { char: 'ꯐ', name: 'Pham', type: 'Mapum mayek' },
      { char: 'ꯖ', name: 'Jil', type: 'Extended Iyek' },
      { char: 'ꯩ', name: 'Cheinap', type: 'Cheitap (Vowel Modifier)' }
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
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯡ', name: 'Ngou Lonsum', type: 'Lonsum Iyek (Final Consonant /ng/)' },
      { char: 'ꯁ', name: 'Sam', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Eingonda thaknaba esing khita piyu.',
      meitei: 'ꯑꯩꯉꯣꯟꯗ ꯊꯛꯅꯕ ꯏꯁꯤꯡ ꯈꯤꯠꯇ ꯄꯤꯌꯨ꯫'
    },
    breakdown: [
      { char: 'ꯏ', name: 'Ee', type: 'Mapum mayek' },
      { char: 'ꯁ', name: 'Sam', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' },
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
      romanized: 'Mei asi yamna sai.',
      meitei: 'ꯃꯩ ꯑꯁꯤ ꯌꯥꯝꯅ ꯁꯥꯏ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯩ', name: 'Cheinap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Nongpokta numit thok-i.',
      meitei: 'ꯅꯣꯡꯄꯣꯛꯇ ꯅꯨꯃꯤꯠ ꯊꯣꯛꯏ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' },
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
      english: 'The moon is very beautiful tonight.',
      romanized: 'Tha se ngasi di yamna phajei.',
      meitei: 'ꯊꯥꯁꯦ ꯉꯁꯤꯗꯤ ꯌꯥꯝꯅ ꯐꯖꯩ꯫'
    },
    breakdown: [
      { char: 'ꯊ', name: 'Thou', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Nupa adu doctor amani.',
      meitei: 'ꯅꯨꯄꯥ ꯑꯗꯨ ꯗꯣꯛꯇꯔ ꯑꯃꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Mahak yamna hotnaba kanba nupi ni.',
      meitei: 'ꯃꯍꯥꯛ ꯌꯥꯝꯅ ꯍꯣꯠꯅꯕ ꯀꯟꯕ ꯅꯨꯄꯤꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' }
    ]
  },
  {
    id: 'w14',
    english: 'River',
    romanized: 'Turel',
    meitei: 'ꯇꯨꯔꯦꯜ',
    bengali: 'তুরেন',
    category: 'Nature',
    pos: 'Noun',
    definition: 'A large natural stream of water flowing in a channel to the sea, a lake, or another river.',
    example: {
      english: 'The Imphal River flows through the city.',
      romanized: 'Imphal turel sahar asigi mayolda chenli.',
      meitei: 'ꯏꯝꯐꯥꯜ ꯇꯨꯔꯦꯜꯅ ꯁꯍꯔ ꯑꯁꯤꯒꯤ ꯃꯌꯣꯜꯗ ꯆꯦꯜꯂꯤ꯫'
    },
    breakdown: [
      { char: 'ꯇ', name: 'Til', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯔ', name: 'Rai', type: 'Extended Iyek' },
      { char: 'ꯦ', name: 'yenap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯜ', name: 'Lai Lonsum', type: 'Lonsum mayek (Final Consonant /n/)' }
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
      romanized: 'Manipur gi chingsang sing asi yamna phajei.',
      meitei: 'ꯃꯅꯤꯄꯨꯔ ꯒꯤ ꯆꯤꯡꯁꯥꯡ ꯁꯤꯡ ꯑꯁꯤ ꯌꯥꯝꯅ ꯐꯖꯩ꯫'
    },
    breakdown: [
      { char: 'ꯆ', name: 'Chil', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' },
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
      romanized: 'Masi eigi yumni.',
      meitei: 'ꯃꯁꯤ ꯑꯩꯒꯤ ꯌꯨꯝꯅꯤ꯫'
    },
    breakdown: [
      { char: 'ꯌ', name: 'Yang', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
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
      romanized: 'Eikhoina Afaba chinjak chaba mathou tai.',
      meitei: 'ꯑꯩꯈꯣꯏꯅ ꯑꯐꯕ ꯆꯤꯟꯖꯥꯛ ꯆꯥꯕ ꯃꯊꯧ ꯇꯥꯏ꯫'
    },
    breakdown: [
      { char: 'ꯆ', name: 'Chil', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'EEnap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯟ', name: 'Na Lonsum', type: 'Lonsum Iyek (Final Consonant /n/)' },
      { char: 'ꯖ', name: 'Jil', type: 'Extended Iyek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' },
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
      romanized: 'Leikol asida lei yamna lei.',
      meitei: 'ꯂꯩꯀꯣꯜ ꯑꯁꯤꯗ ꯂꯩ ꯌꯥꯝꯅ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯂ', name: 'Lai', type: 'Mapum mayek' },
      { char: 'ꯩ', name: 'Cheinap', type: 'Cheitap (Vowel Modifier)' }
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
      { char: 'ꯑ', name: 'Atiya', type: 'Mapum mayek' },
      { char: 'ꯩ', name: 'Cheinap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Nang kadaida chatlino?',
      meitei: 'ꯅꯪ ꯀꯗꯥꯏꯗ ꯆꯠꯂꯤꯅꯣ?'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯪ', name: 'Nunglonsum', type: 'Cheitap (Nasalization dot)' }
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
      romanized: 'Eingonda lairik ama piyu.',
      meitei: 'ꯑꯩꯉꯣꯟꯗ ꯂꯥꯏꯔꯤꯛ ꯑꯃꯥ ꯄꯤꯌꯨ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapum mayek' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Eigi kolom ani lei.',
      meitei: 'ꯑꯩꯒꯤ ꯀꯣꯂꯣꯝ ꯑꯅꯤ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapum mayek' },
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' }
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
      english: 'I have three pens.',
      romanized: 'Eigi kolom ahum lei.',
      meitei: 'ꯑꯩꯒꯤ ꯀꯣꯂꯣꯝ ꯑꯍꯨꯝ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapum mayek' },
      { char: 'ꯍ', name: 'Huk', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
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
      english: 'I have four apples.',
      romanized: 'Eigi sem mari lei.',
      meitei: 'ꯑꯩꯒꯤ ꯁꯦꯝ ꯃꯔꯤ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯔ', name: 'Rai', type: 'Extended Iyek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' }
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
      english: 'Humans have five fingers.',
      romanized: 'Meeoibagi khutsa manga lei.',
      meitei: 'ꯃꯤꯑꯣꯏꯕꯒꯤ ꯈꯨꯠꯁꯥ ꯃꯉꯥ ꯂꯩ꯫'
    },
    breakdown: [
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯉ', name: 'Ngou', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      { char: 'ꯏ', name: 'Ee', type: 'Mapum mayek' },
      { char: 'ꯃ', name: 'Mit', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      { char: 'ꯏ', name: 'Ee', type: 'Mapum mayek' },
      { char: 'ꯄ', name: 'Pa', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Atiya se ngasi di higok machu oi.',
      meitei: 'ꯑꯇꯤꯌꯥ ꯁꯦ ꯉꯁꯤꯗꯤ ꯍꯤꯒꯣꯛ ꯃꯆꯨ ꯑꯣꯏ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapum mayek' },
      { char: 'ꯇ', name: 'Til', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯌ', name: 'Yang', type: 'Mapum mayek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
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
      romanized: 'Nungshit ayingba sitli.',
      meitei: 'ꯅꯨꯡꯁꯤꯠ ꯑꯏꯪꯕ ꯁꯤꯠꯂꯤ꯫'
    },
    breakdown: [
      { char: 'ꯅ', name: 'Na', type: 'Mapum mayek' },
      { char: 'ꯨ', name: 'oonap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯡ', name: 'Ngou Lonsum', type: 'Lonsum Iyek (Final Consonant /ng/)' },
      { char: 'ꯁ', name: 'Sam', type: 'Mapum mayek' },
      { char: 'ꯤ', name: 'Inap', type: 'Cheitap (Vowel Modifier)' },
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
      romanized: 'Eikhoigi ojana yamna fajnna sandokna takpi.',
      meitei: 'ꯑꯩꯈꯣꯏꯒꯤ ꯑꯣꯖꯥꯅ ꯌꯥꯝꯅ ꯐꯖꯟꯅ ꯁꯟꯗꯣꯛꯅ ꯇꯥꯛꯄꯤ꯫'
    },
    breakdown: [
      { char: 'ꯑ', name: 'Atiya', type: 'Mapum mayek' },
      { char: 'ꯣ', name: 'Onap', type: 'Cheitap (Vowel Modifier)' },
      { char: 'ꯖ', name: 'Jil', type: 'Extended Iyek' },
      { char: 'ꯥ', name: 'Aatap', type: 'Cheitap (Vowel Modifier)' }
    ]
  }
];
