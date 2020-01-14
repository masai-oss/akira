""" Model for asset """
from app.main import db
from uuid import uuid4
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey


class Asset(db.Model):
    __tablename__ = "assets"
    id = Column(Integer, primary_key=True)
    serial_number = Column(String(50))
    brand = Column(String(50))
    model = Column(String(50))
    cost = Column(Integer)
    item_name = Column(String(50))
    date_of_purchase = Column(DateTime(timezone=True))
    item_uid = Column(String(50), default=uuid4(), nullable=False)
    picture = Column(String(255))
    status = Column(String(10), nullable=False, default="Available")
    deleted = Column(Boolean, nullable=False, default=False)
    disposed_by = Column(Integer)
    date_of_disposal = Column(DateTime(timezone=True))
    category_id = Column(Integer, ForeignKey(
        "categories.id"), nullable=False)
    data = Column(String(255))
    assigned_to = Column(String(255))
