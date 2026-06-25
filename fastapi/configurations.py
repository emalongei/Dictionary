# configurations.py
class Settings:
    MONGO_URI: str = "mongodb://mavyumnam_db_user:6he7SrKkQdqLpEZD@ac-ueqik67-shard-00-00.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-01.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-02.atrdmtd.mongodb.net:27017/?ssl=true&replicaSet=atlas-jtlga2-shard-0&authSource=admin"
    DB_NAME: str = "Dictionary"
    COLLECTION_NAME: str = "EnglishToMeiteilon"

settings = Settings()

# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi
# from typing import Any

# uri = "mongodb://mavyumnam_db_user:6he7SrKkQdqLpEZD@ac-ueqik67-shard-00-00.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-01.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-02.atrdmtd.mongodb.net:27017/?ssl=true&replicaSet=atlas-jtlga2-shard-0&authSource=admin&appName=Wahanthok"
# #uri = "mongodb://mavyumnam_db_user:6he7SrKkQdqLpEZD@ac-ueqik67-shard-00-00.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-01.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-02.atrdmtd.mongodb.net:27017/?ssl=true&replicaSet=atlas-jtlga2-shard-0&authSource=admin"
# #first one is copied from <-


# # Create a new client and connect to the server
# client:MongoClient[dict[str,Any]] = MongoClient(uri, server_api=ServerApi('1'))
# dbname:str = "Dictionary"
# collectionname:str = "EnglishToMeiteilon"

# # Send a ping to confirm a successful connection
# # try:
# #     client.admin.command('ping')
# #     print("Pinged your deployment. You successfully connected to MongoDB!")
# # except Exception as e:
# #     print(e)