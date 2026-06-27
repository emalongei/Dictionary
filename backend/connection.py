# connection.py
from typing import Any
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi  
from configurations import settings

try:
    mongo_uri = settings.get_connection_string()  
    db_name = settings.get_database_name()        
    collection_name = settings.get_collection_name() 

    masked_uri = mongo_uri[:20] + "..." if len(mongo_uri) > 20 else mongo_uri
    print(f"Connecting to MongoDB: {masked_uri}")
    print(f"Database: {db_name}")
    print(f"Collection: {collection_name}")
    
except Exception as e:
    print(f"Configuration error: {e}")
    raise

# ✅ Simple connection - no extra parameters
client: MongoClient[dict[str, Any]] = MongoClient(
    mongo_uri,
    server_api=ServerApi('1')
)

try:
    client.admin.command('ping')
    print("MongoDB connection successful!")
except Exception as e:
    print(f"MongoDB connection failed: {e}")
    raise

db = client[db_name]

# =============================================
# COLLECTIONS
# =============================================

# Primary collection (translations)
collection = db[collection_name]

# Alphabet collection (already has data)
collection_alphabet = db["Alphabet"]  # 👈 Just add this line

# =============================================
# PRINT STATUS
# =============================================

print(f"✅ Connected to database: {db.name}")
print(f"📚 Collections:")
print(f"   - {collection.name} (translations)")
print(f"   - {collection_alphabet.name} (alphabet)")

# Optional: Show count of documents
try:
    trans_count = collection.count_documents({})
    alpha_count = collection_alphabet.count_documents({})
    print(f"📊 Document counts:")
    print(f"   - Translations: {trans_count}")
    print(f"   - Alphabet: {alpha_count}")
except Exception as e:
    print(f"⚠️ Could not get document counts: {e}")