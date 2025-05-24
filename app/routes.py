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