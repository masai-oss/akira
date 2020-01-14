"""Model for invitation"""
from app.main import db
from uuid import uuid4
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey

class Invitation(db.Model):
    """[summary]
    
    Args:
        db ([type]): [description]
    """
    __tablename__ = "invitation"
    id = Column(Integer, primary_key=True)
    public_id = Column(String(50), unique=True)
    email = Column(String(255), unique=True, nullable=False)
    title = Column(String(255), nullable=False)
    reporting_to = Column(Integer, nullable=False)
    invite_uid = Column(String(255), unique=True, nullable=False)
    invite_expairy = Column(DateTime(timezone=True), nullable=False)
    invited_by = Column(Integer, nullable=False)
    completed = Column(Boolean, nullable=False, default=False)