from app.main import db
from sqlalchemy import Column, Integer, ForeignKey, String, DateTime


class Asset_Log(db.Model):
    """[summary]
    Arguments:
        db {[type]} -- [description]
    """
    __tablename__ = "assets_log"
    id = Column(Integer, primary_key=True)
    item_id = Column(Integer, ForeignKey("assets.id"), nullable=False)
    assigned_by = Column(
        Integer, ForeignKey("users.id"), nullable=False)
    assigned_to = Column(
        Integer, ForeignKey("users.id"), nullable=False)
    date_of_assignment = Column(DateTime(timezone=True))
    date_of_return = Column(DateTime(timezone=True)),
    expected_date_of_return = Column(DateTime(timezone=True)),
    remarks = Column(String(50))
