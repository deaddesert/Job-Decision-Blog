# Generated by Django 3.0.4 on 2020-04-04 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JobShow', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobsshow',
            name='domain',
            field=models.TextField(default=None),
        ),
    ]
