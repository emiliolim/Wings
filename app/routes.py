from flask import Blueprint, request, jsonify, current_app, send_from_directory
from app.models import Users
from sqlalchemy.exc import IntegrityError
from app import db, bcrypt
import os
from werkzeug.utils import secure_filename
import datetime
import jwt

routes = Blueprint('routes', __name__)

@routes.route('/users', methods=['GET'])
def get_users():
    """
    return: retrieve all users
    """
    users = Users.query.all()
    return jsonify([{
        'id': user.id,
        'username': user.username,
        'password_hash': user.password_hash,
        'email': user.email,
    } for user in users])

@routes.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    """
    return: retrieve a single user
    """
    user = db.session.get(Users, id)
    return jsonify({
        'id': user.id,
        'username': user.username,
        'password_hash': user.password_hash,
        'email': user.email,
    })

@routes.route('/users', methods=['POST'])
def add_user():
    """
    add a user to the database
    """
    # form data
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')

    if not username or not password or not email:
        return jsonify({'error': 'missing fields'}), 400

    try:
        # byte = password.encode('utf-8')
        hashpass = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = Users(
            username=username,
            password_hash=hashpass,
            email=email
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'new user added'}), 201

    except Exception as e:
        db.session.rollback()
        print(f"Error message: {e}")
        return jsonify({'error': 'internal server error'}), 500

@routes.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    """
    Update user, given a user id
    """
    user = Users.query.get_or_404(id)

    username = request.form.get('username')
    password_hash = request.form.get('password_hash')
    email = request.form.get('email')

    user.username = username
    user.password_hash = password_hash
    user.email = email

    db.session.commit()
    return jsonify({'message': 'user updated!'}), 200

@routes.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = Users.query.get_or_404(id)

    db.session.delete(id)
    db.session.commit(id)

    return jsonify({'message': 'animal deleted!'}), 200

@routes.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if not username or not password:
        return jsonify({'error': 'Missing username or password'}), 400
    
    user = Users.query.filter_by(username=username).first()

    # check if user exists in db and password matches hashed password
    if user and bcrypt.check_password_hash(user.password_hash, password):
        token = jwt.encode({
            'username': user.username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, current_app.config['SECRET_KEY'], algorithm='HS256')

        return jsonify({'token': token}), 200
    return jsonify({'error': 'invalid credentials'}), 401


@routes.route('/')
def home():
    return 'Welcome to Wings'