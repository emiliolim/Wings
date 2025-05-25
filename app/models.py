from app import db
from werkzeug.security import generate_password_hash, check_password_hash
import jwt

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    def generate_auth_token(self, expiration=600):
    {
        return jwt.encode(
            {'id': self.id, 'exp': datetime.datetime.now(datetime.)}
        )
    }

    def __repr__(self):
        return f'<User {self.username}>'