from flask import request
from flask_restful import Resource
from ..services.dispose_asset_service import dispose_asset


class DisposeAsset(Resource):
    def post(self):
        data = request.json
        return dispose_asset(data)
