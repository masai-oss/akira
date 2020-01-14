from app.main import db
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from datetime import datetime, timedelta


class Invitation(db.Model):
    __tablename__ = "invitation"

    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, nullable=False)
    title = Column(String(255), nullable=False)
    reporting_to = Column(Integer, nullable=False)
    invite_uid = Column(String(255), unique=True, nullable=False)
    invite_expiry = Column(DateTime(
        timezone=True), nullable=False, default=datetime.now() + timedelta(days=1))
    invited_by = Column(Integer, nullable=False)
    completed = Column(Boolean, nullable=False, default=False)
