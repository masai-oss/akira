from flask import request
from flask_restful import Resource
from ..services.dashboard_service import get_dashboard_info


class Dashboard(Resource):
    """[summary]
    
    Arguments:
        Resource {[type]} -- [description]
    """
    def get(self):
        return get_dashboard_info()
