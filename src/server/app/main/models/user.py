""" Model for user """

from app.main import flask_bcrypt, db
import datetime
import jwt
from app.main.settings import key
# from .. import db, flask_bcrypt, login_manage

class User(db.Model):
    """
    [summary]
    
    Args:
        UserMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    public_id = db.Column(db.String(50), unique=True)
    invitation_id = db.Column(db.String(150), db.ForeignKey("invitation.invite_uid"), nullable=False)
    username = db.Column(db.String(30), unique=True)
    admin = db.Column(db.Boolean, nullable=False, default=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    joining_date = db.Column(db.DateTime(timezone=True), nullable=False)
    title = db.Column(db.String(255))
    phone_number = db.Column(db.Integer, nullable=False)
    profile_picture = db.Column(db.String(255))
    gender = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(255))
    password_salt = db.Column(db.String(255))
    password_hash = db.Column(db.String(255))
    language = db.Column(db.String(100))

    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.password_hash = flask_bcrypt.generate_password_hash(password).decode('utf-8') if password else None

    def check_password(self, password):
        return flask_bcrypt.check_password_hash(self.password_hash, password)
    
    @staticmethod
    def encode_auth_token(user_id):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                key,
                algorithm='HS256'
            )
        except Exception as e:
            return e

    @staticmethod
    def decode_auth_token(auth_token):
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(auth_token, key)
            # is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
            # if is_blacklisted_token:
            #     return 'Token blacklisted. Please log in again.'
            # else:
            #     return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

    def __repr__(self):
        return "<User '{}'>".format(self.username)
