from flask import Blueprint, request, jsonify, current_app, send_from_directory
from app.models import Users
from sqlalchemy.exc import IntegrityError
from app import db
import os
from werkzeug.utils import secure_filename

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
def get_user():
    """
    return: retrieve a single user
    """
    user = db.session.get(StuffedAnimals, animal_id)
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
    password_hash = request.form.get('password_hash')
    email = request.form.get('email')

    try:
        new_user = Users(
            username=username,
            password_hash=password_hash,
            email=email
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'new user added'}), 201

    except Exception:
        db.session.rollback()
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

@routes.route('/')
def home():
    return 'Welcome to Wings'