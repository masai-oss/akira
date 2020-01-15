from app.main.models.user import User
from app.main import login_manager, db
import uuid
import time
from datetime import datetime, timedelta

@login_manager.user_loader
def load_user(user_id):
    """
    [summary]
    
    Args:
        user_id ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    return User.query.get(int(user_id))

def save_new_user(data, args):
    invitation_token = args["invitation_token"]

    invite_id = db.engine.execute("SELECT invite_uid FROM invitation WHERE invite_uid=%s and email=%s", (str(invitation_token), str(data.get("email")),)).first()
    if invite_id != None:
        title = db.engine.execute("SELECT title FROM invitation WHERE invite_uid=%s", (str(invitation_token),)).first()
        new_user = User(
            public_id=str(uuid.uuid4()),
            invitation_id = invite_id[0],
            username=data['username'],
            admin=data.get('admin', False),
            first_name=data['first_name'],
            last_name=data['last_name'],
            joining_date = str(datetime.now()),
            title = title[0],
            phone_number = data['phone_number'],
            gender = data['gender'],
            address = data['address'],
            password = data.get('password', None),
            language = data['language']
        )
        save_changes(new_user)
        status_code = 200
        response_object = {
            "comment": "User added",
            "data": {}
        }
        return response_object, status_code
    else:
        status_code = 400
        response_object={
            "comment": "Ivitation Expaired",
            "data": {}
        }
        return response_object, status_code


def get_all_users():
    return User.query.all()

def login(email, password):
    user =  User.query.filter_by(email=email).first()
    
def get_one_user(public_id):
    return User.query.filter_by(public_id=public_id).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()