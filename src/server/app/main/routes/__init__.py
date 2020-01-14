from app.main.routes.auth_controller import UserLogin, LogoutAPI, UserSignUp, FacebookAuthorize, GithubAuthorize
from app.main.routes.invitation_controller import InviteUser 
# from app.main.routes.signup_controller import Signup
from app.main.routes.signin_controller import Signin
from app.main import api
# from app.main.routes.

def add_resources(app):
    """
    Method to add resources to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(UserLogin, '/auth/login')
    api.add_resource(LogoutAPI, '/logout')
    api.add_resource(UserSignUp, '/auth/signup')
    api.add_resource(FacebookAuthorize, '/facebook')
    api.add_resource(GithubAuthorize, '/github')
    api.add_resource(InviteUser, '/users/invite')
    # api.add_resource(Signin, '/auth/login')



def register_blueprints(app):
    """
    Method to add blueprints to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    pass