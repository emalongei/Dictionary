import os
from dotenv import load_dotenv
from typing import Type, Any
load_dotenv()
class Settings:
    MONGODB_URI:str = os.environ.get('MONGODB_URI','mongodb://localhost:27017/default_db')
    DB_NAME:str = os.environ.get('DATABASE_NAME', 'Dictionary')
    COLLECTION_NAME:str = os.environ.get('COLLECTION_NAME', 'EnglishToMeiteilon') 

    @classmethod
    def validate(cls:Type['Settings'])->None:
        if not cls.MONGODB_URI:
            raise ValueError(
                "MONGODB_URI environment variable is not set. "
                "Please set it in your .env file or Render environment variables."
            )
        if not cls.MONGODB_URI.startswith('mongodb'):
            raise ValueError(
                f"Invalid MONGODB_URI format: {cls.MONGODB_URI}. "
                "Must start with 'mongodb://' or 'mongodb+srv://'"
            )    
        if not cls.DB_NAME:
            raise ValueError("DB_NAME environment variable is not set!")

        if not cls.COLLECTION_NAME:
            raise ValueError("COLLECTION_NAME environment variable is not set!")
        
        print("✅ All environment variables validated successfully")
    @classmethod
    def get_connection_string(cls:Type['Settings']) -> str:
        cls.validate()
        return cls.MONGODB_URI

    @classmethod
    def get_database_name(cls:Type['Settings']) -> str:
        return cls.DB_NAME

    @classmethod
    def get_collection_name(cls: Type['Settings']) -> str:
        return cls.COLLECTION_NAME
        
    @classmethod
    def get_all_settings(cls: Type['Settings']) -> dict[str,Any]:
        return {
            'mongodb_uri': cls.MONGODB_URI[:30] + '...' if len(cls.MONGODB_URI) > 30 else cls.MONGODB_URI,
            'database_name': cls.DB_NAME,
            'collection_name': cls.COLLECTION_NAME
            }
settings = Settings()