from app.main.models.asset import Asset
from app.main import db


def get_dashboard_info():
    total_assets = db.session.query(Asset.id).count()
    available_assets = db.session.query(Asset).filter(Asset.status == 'Available').count()

    response_object = {
        "comment": "Stats on available asssets",
        "assets": {
            "total": total_assets,
            "available": available_assets
        }
    }

    return response_object, 200
    