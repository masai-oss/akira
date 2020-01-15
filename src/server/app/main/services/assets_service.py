from app.main.models.asset import Asset
from app.main import db


def get_assets():
    # Filter and sort not implemented
    
    raw_data = Asset.query.all()

    contents = []
    for each in raw_data:
        contents.append(
            {"item_uid": each.item_uid, "item_name": each.item_name, "assigned_to": each.assigned_to})
    response_object = {
        "comment": "Received All Assets",
        "data": contents
    }

    return response_object, 200

def get_asset(id):
    raw_data = db.engine.execute(
        "SELECT * FROM assets WHERE id = %s", (id,)
    )

    contents = []
    for each in raw_data:
        contents.append(
            {
                "id": each.id, 
                "serial_number": each.serial_number, 
                "brand": each.brand,
                "model": each.model,
                "item_name": each.item_name,
                "cost": each.cost,
                "date_of_purchase": each.date_of_purchase,
                "item_uid": each.item_uid,
                "picture": each.picture,
                "status": each.status,
                "category_id": each.category_id,
                "disposed_by": each.disposed_by,
                "date_of_disposal": each.date_of_disposal
            }
        )
    response_object = {
        "comment": "Received Asset Details",
        "data": contents
    }

    return response_object, 200


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def save_asset(data):
    new_asset = Asset(serial_number=data.get("serial_number"), brand=data.get(
        "brand"), category_id=data.get("category_id"), model=data.get("model"), cost=data.get("cost"), item_name=data.get("item_name"), picture=data.get("picture"))
    save_changes(new_asset)
    response_object = {
        "comment": "Asset Added Successfully",
        "data": {}
    }

    return response_object, 201


def delete_asset(data):
    db.engine.execute("DELETE FROM assets WHERE item_uid = %s",
                      (data.get("item_uid"),))
    db.session.commit()

    response_object = {
        "comment": "Assets Deleted Successfully"
    }

    return response_object, 204
