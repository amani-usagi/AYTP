from django.db import models


# Create your models here.
class MalingDemo(models.Model):
    name = models.CharField(max_length=16)
    email = models.CharField(max_length=50, null=True)
    message = models.CharField(max_length=200)
    create_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'malingSample'
