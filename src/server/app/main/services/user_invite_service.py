from app.main import db
from app.main.models.invitations import Invitation
from app.main import mail
from flask_mail import Message
from uuid import uuid4


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def save_invite(data):
    invite_uid = uuid4()
    new_invite = Invitation(email=data.get("email"), title=data.get(
        "title"), reporting_to=data.get("reporting_to"), invited_by=data.get("invited_by"), invite_uid=invite_uid)

    save_changes(new_invite)

    if send_invite(data.get("email"), invite_uid):

        response_object = {
            "comment": "Invitation Sent Successfully",
            "data": {}
        }

        return response_object, 200
    else:
        response_object = {
            "comment": "Invitation Failed",
            "data": {}
        }

        return response_object, 404


def send_invite(email, uid):
    msg = Message(f"Here's your link to registration, {uid}", sender="from@example.com",
                  recipients=[email])
    mail.send(msg)

    return True
