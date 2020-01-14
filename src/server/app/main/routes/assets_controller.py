from flask import request
from flask_restful import Resource
from ..services.assets_service import save_asset, get_assets, get_asset, delete_asset


class Assets(Resource):
    def get(self, id="null"):
        if id == "null":
            return get_assets()
        return get_asset(id)

    def post(self):
        data = request.json
        return save_asset(data)

    def delete(self):
        data = request.json
        return delete_asset(data)
