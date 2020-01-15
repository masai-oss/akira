from flask import request
from flask_restful import Resource
from ..services.category_service import save_category, get_categories, delete_category


class Categories(Resource):
    def get(self):
        """Get All Available Categories"""
        return get_categories()

    def post(self):
        """Create new category"""
        data = request.json
        return save_category(data)

    def delete(self):
        """Delete a category & all the assets under it"""
        data = request.json
        return delete_category(data)
