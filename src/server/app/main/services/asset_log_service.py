from app.main.models.asset_log import Asset_Log
from app.main import db


def get_logs(id):
    raw_data = db.engine.execute(
        "SELECT * FROM assets_log WHERE id = %s", (id,)
    )

    contents = []
    for each in raw_data:
        contents.append(
            {
                "id": each.id, 
                "item_id": each.item_id,
                "assigned_by": each.assigned_by,
                "assigned_to": each.assigned_to,
                "date_of_assignment": str(each.date_of_assignment),
                "expected_date_of_return": str(each.expected_date_of_return),
                "date_of_return": str(each.date_of_return),
                "remarks": each.remarks
            }
        )
    response_object = {
        "comment": "Received Asset Logs",
        "data": contents
    }

    return response_object, 200


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def save_log(data):
    new_log = Asset_Log(item_uid=data.get("item_uid"), date_of_assignment=data.get(
        "date_of_assignment"), expected_date_of_return=data.get("expected_date_of_return"))
    save_changes(new_log)

    response_object = {
        "comment": "Asset Assigned Successfully",
        "data": {}
    }

    return response_object, 201
