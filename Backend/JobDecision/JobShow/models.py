from django.db import models

# Create your models here.

class JobsShow(models.Model):
    name = models.CharField(max_length=200)
    field = models.CharField(max_length=200)
    subjects = models.CharField(max_length=200)
    domain = models.CharField(default=None, max_length=200)
    link = models.SlugField()
    image = models.CharField(default=None, max_length=200)
    hot = models.BooleanField(default=False)

    def __str__(self):
        return self.name