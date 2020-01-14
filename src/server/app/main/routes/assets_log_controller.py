from flask import request
from flask_restful import Resource
from ..services.asset_log_service import save_log, get_logs


class AssetsLog(Resource):
    def get(self, id):
        return get_logs(id)

    def post(self):
        data = request.json
        return save_log(data)
