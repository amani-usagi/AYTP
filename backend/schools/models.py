from django.db import models
from datetime import datetime

from django.db.models.fields import CharField

class Schools(models.Model):
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='profile/%Y/%m/%d/') # Image uploads
    decription = models.TextField(blank=True)
    phone = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    date_created = models.DateField()
