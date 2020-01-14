from app.main.models.asset import Asset
from app.main import db


def dispose_asset(data):
    db.engine.execute("""UPDATE assets SET status = %s, date_of_disposal = CURDATE() WHERE item_uid = %s""",
                      ("disposed", data.get("item_uid")))
    db.session.commit()
    response_object = {
        "comment": "Asset Disposed Successfully",
        "data": {}
    }

    return response_object, 200
