# database.py
from typing import Any
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi          # ⬅️ Import the Collection type
from configurations import settings

# Now use the settings from that file
client: MongoClient[dict[str, Any]] = MongoClient(
    settings.MONGO_URI, 
    server_api=ServerApi('1')
)

db = client[settings.DB_NAME]                # "Dictionary"
collection = db[settings.COLLECTION_NAME]    # "EnglishToMeiteilon"