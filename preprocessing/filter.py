import re
import pandas as pd
import nltk # pyright: ignore[reportMissingTypeStubs]

# Download the required dictionary and grammar databases
print("Checking and downloading standard English databases...")
nltk.download('words', quiet=True) # type: ignore
nltk.download('wordnet', quiet=True) # type: ignore
nltk.download('omw-1.4', quiet=True) # type: ignore

from nltk.corpus import words
from nltk.stem import WordNetLemmatizer # pyright: ignore[reportUnknownVariableType, reportAttributeAccessIssue]

# Initialize the lemmatizer (reduces words to root form) and dictionary set
lemmatizer : WordNetLemmatizer = WordNetLemmatizer() # type: ignore
STANDARD_DICTIONARY: set[str] = set(w.lower() for w in words.words()) # type: ignore

# Configuration
INPUT_FILE = "parallel.csv"       
OUTPUT_FILE = "pristine_english_words.csv"   
ENGLISH_COL = "English"            

# Common structural filler words to skip entirely
STOP_WORDS = {
    "the", "a", "an", "is", "am", "are", "was", "were", "be", "been", "being",
    "to", "of", "and", "in", "that", "this", "it", "for", "on", "with", "as", 
    "at", "by", "he", "she", "they", "we", "i", "you", "his", "her", "their"
}

def clean_and_deduplicate_dictionary() -> None:
    print("Reading parallel corpus...")
    try:
        df = pd.read_csv(INPUT_FILE)
    except FileNotFoundError:
        print(f"Error: Could not find '{INPUT_FILE}'.")
        return

    unique_root_words: list[str] = []
    seen_roots: set[str] = set()
    
    skipped_non_standard = 0
    removed_redundant_forms = 0
    
    print("Processing, lemmatizing, and removing redundancies...")
    for sentence in df[ENGLISH_COL].dropna():
        # Keep only basic letters
        clean_sentence = re.sub(r'[^a-zA-Z\s]', '', str(sentence))
        tokens = clean_sentence.split()
        
        for token in tokens:
            word = token.lower()
            
            # 1. Skip if it's a structural stop word or too short
            if len(word) <= 1 or word in STOP_WORDS:
                continue
                
            # 2. Check if it's a valid standard dictionary word
            if word not in STANDARD_DICTIONARY:
                skipped_non_standard += 1
                continue
            
            # 3. Lemmatize (Convert variations to a single base root)
            # We check both Verb ('v') and Noun ('n') forms for deep cleaning
            root_word = lemmatizer.lemmatize(word, pos='v')
            root_word = lemmatizer.lemmatize(root_word, pos='n')
            
            # 4. Final Deduplication Check
            if root_word not in seen_roots:
                unique_root_words.append(root_word)
                seen_roots.add(root_word)
            else:
                # If 'walking' was turned into 'walk', and 'walk' is already saved,
                # this counts as removing a redundant duplicate form.
                if word != root_word:
                    removed_redundant_forms += 1

    # Sort the core dictionary words alphabetically
    unique_root_words.sort()

    # Save to your clean CSV
    output_df = pd.DataFrame(unique_root_words, columns=["Clean_Root_Words"])
    output_df.to_csv(OUTPUT_FILE, index=False, encoding="utf-8")
    
    print("-" * 60)
    print(f"Filtered out {skipped_non_standard} non-standard words/typos/names.")
    print(f"Collapsed and removed {removed_redundant_forms} redundant grammatical variations.")
    print(f"Success! Saved {len(unique_root_words)} absolute unique base words to '{OUTPUT_FILE}'.")
    print("-" * 60)

if __name__ == "__main__":
    clean_and_deduplicate_dictionary()