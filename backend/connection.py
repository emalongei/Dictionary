# database.py or connection.py
from typing import Any
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi  
from configurations import settings
import ssl

try:
    mongo_uri = settings.get_connection_string()  
    db_name = settings.get_database_name()        
    collection_name = settings.get_collection_name() 

    ssl_context = ssl.create_default_context()
    ssl_context.minimum_version = ssl.TLSVersion.TLSv1_2
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE

    masked_uri = mongo_uri[:20] + "..." if len(mongo_uri) > 20 else mongo_uri
    print(f"Connecting to MongoDB: {masked_uri}")
    print(f"Database: {db_name}")
    print(f"Collection: {collection_name}")
    
except Exception as e:
    print(f"Configuration error: {e}")
    raise

client: MongoClient[dict[str, Any]] = MongoClient(
    mongo_uri,
    tls=True,
    tlsAllowInvalidCertificates=True,
    tlsAllowInvalidHostnames=True,
    ssl_context=ssl_context,
    server_api=ServerApi('1'),
    connectTimeoutMS=30000,
    socketTimeoutMS=30000,
    serverSelectionTimeoutMS=30000,
)

try:
    client.admin.command('ping')
    print("MongoDB connection successful!")
except Exception as e:
    print(f"MongoDB connection failed: {e}")
    raise

db = client[db_name]
collection = db[collection_name]

print(f"Connected to database: {db.name}")
print(f"Using collection: {collection.name}")