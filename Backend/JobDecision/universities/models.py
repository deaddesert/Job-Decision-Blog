from django.db import models

# Create your models here.

class Universities(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(default=None, max_length=225)
    link = models.SlugField()

    def __str__(self):
        return self.name
