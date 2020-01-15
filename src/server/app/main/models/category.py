""" Model for category """

from app.main import db
from sqlalchemy import Column, Integer, String


class Category(db.Model):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True)
    category_name = Column(String(50), unique=True, nullable=False)
