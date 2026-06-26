# database.py
from typing import Any
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi  
from configurations import settings

try:
    mongo_uri = settings.get_connection_string()  
    db_name = settings.get_database_name()        
    collection_name = settings.get_collection_name() 
    
    # Masking URI for security
    masked_uri = mongo_uri[:20] + "..." if len(mongo_uri) > 20 else mongo_uri
    print(f"Connecting to MongoDB: {masked_uri}")
    print(f"Database: {db_name}")
    print(f"Collection: {collection_name}")
    
except Exception as e:
    print(f" Configuration error: {e}")
    raise




client: MongoClient[dict[str, Any]] = MongoClient(
    settings.MONGODB_URI, 
    server_api=ServerApi('1')
)

try:
    client.admin.command('ping')
    print(" MongoDB connection successful!")
except Exception as e:
    print(f" MongoDB connection failed: {e}")
    raise

db = client[settings.DB_NAME]               
collection = db[settings.COLLECTION_NAME]  

print(f" Connected to database: {db.name}")
print(f" Using collection: {collection.name}")