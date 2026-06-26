# configurations.py
class Settings:
    MONGO_URI: str = "mongodb://mavyumnam_db_user:6he7SrKkQdqLpEZD@ac-ueqik67-shard-00-00.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-01.atrdmtd.mongodb.net:27017,ac-ueqik67-shard-00-02.atrdmtd.mongodb.net:27017/?ssl=true&replicaSet=atlas-jtlga2-shard-0&authSource=admin"
    DB_NAME: str = "Dictionary"
    COLLECTION_NAME: str = "EnglishToMeiteilon"

settings = Settings()