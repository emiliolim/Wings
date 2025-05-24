import os
from urllib.parse import quote_plus  # For encoding special characters in passwords
from dotenv import load_dotenv

load_dotenv()

class Config():
    # postgres DB details
    DB_USER = os.getenv('POSTGRES_USER')
    DB_PASSWORD = os.getenv('POSTGRES_PASSWORD')
    DB_HOST = os.getenv('POSTGRES_HOST')
    DB_PORT = os.getenv('POSTGRES_PORT')
    DB_DATABASE = os.getenv('POSTGRES_DATABASE')

    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("Database_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False