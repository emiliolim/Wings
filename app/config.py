import os
from urllib.parse import quote_plus  # For encoding special characters in passwords
from dotenv import load_dotenv

load_dotenv()

class Config():
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("Database_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False