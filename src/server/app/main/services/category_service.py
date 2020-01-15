from app.main.models.category import Category
from app.main import db


def get_categories():
    raw_data = Category.query.all()

    contents = []
    for each in raw_data:
        contents.append(
            {"name": each.category_name, "id": each.id})
    response_object = {
        "comment": "Received All Categories",
        "data": contents
    }

    return response_object, 200


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def save_category(data):
    category = Category.query.filter_by(
        category_name=data["category_name"]).first()
    if not category:
        new_category = Category(category_name=data["category_name"])
        save_changes(new_category)
        response_object = {
            "comment": "Category Added Successfully",
            "data": {}
        }
        return response_object, 201
    else:
        response_object = {
            "comment": "Category Already Exists",
            "data": {}
        }
        return response_object, 409


def delete_category(data):
    db.engine.execute(
        "DELETE FROM assets WHERE category_id = %s", (data["category_id"],))
    db.session.commit()
    db.engine.execute("DELETE FROM categories WHERE id = %s",
                      (data["category_id"],))
    db.session.commit()

    response_object = {
        "comment": "Category Deleted Successfully"
    }

    return response_object, 204
