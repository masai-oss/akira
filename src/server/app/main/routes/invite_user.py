from flask import request
from flask_restful import Resource
from app.main.services.user_invite_service import save_invite


class InviteUser(Resource):
    def post(self):
        data = request.json
        return save_invite(data)
