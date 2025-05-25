import os

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from sqlalchemy import MetaData
from app.config import Config
from flask_bcrypt import Bcrypt
from flask_cors import CORS

db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app(config_class='app.config.Config'):  # Adjust path if needed
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    CORS(app)   
    bcrypt.init_app(app)

    from app.routes import routes
    app.register_blueprint(routes)

    with app.app_context():
        db.create_all()  # Create all database tables

    return app