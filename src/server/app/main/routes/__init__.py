from app.main.routes.auth_controller import UserLogin, LogoutAPI, UserSignUp, FacebookAuthorize, GithubAuthorize
from app.main import api

from app.main.routes.categories_controller import Categories
from app.main.routes.assets_controller import Assets
from app.main.routes.assets_log_controller import AssetsLog
from app.main.routes.localization_controller import Localization
from app.main.routes.invite_user import InviteUser


def add_resources(app):
    """
    Method to add resources to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(UserLogin, '/login')
    api.add_resource(LogoutAPI, '/logout')
    api.add_resource(UserSignUp, '/signup')
    api.add_resource(FacebookAuthorize, '/facebook')
    api.add_resource(GithubAuthorize, '/github')
    api.add_resource(Localization, "/localization")
    api.add_resource(InviteUser, "/invite")

    api.add_resource(Categories, '/categories')
    api.add_resource(Assets, "/assets")
    api.add_resource(AssetsLog, "/assets/assign")


def register_blueprints(app):
    """
    Method to add blueprints to app context

    Args:
        app (object): object of Flask representing the app in context
    """
    pass
