# Generated by Django 3.0.4 on 2020-04-16 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JobShow', '0004_auto_20200416_1629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobsshow',
            name='image',
            field=models.CharField(default=None, max_length=200),
        ),
    ]