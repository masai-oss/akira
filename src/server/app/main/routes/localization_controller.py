from flask import request
from flask_restful import Resource
from ..services.localization_service import get_lang


class Localization(Resource):
    def get(self):
        data = request.args.get("lang")
        return get_lang(language=data)
