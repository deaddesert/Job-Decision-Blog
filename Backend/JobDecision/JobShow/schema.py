import graphene

from .models import JobsShow

from graphene_django_extras import DjangoObjectType, DjangoFilterListField

from django.db.models import Q



class JobType(DjangoObjectType):
    class Meta:
        model = JobsShow
        filter_fields = {
            "name": ("icontains",),
            "subjects": ("icontains",),
            "domain" : ("icontains",),
            "field" : ("icontains",),
            "hot" : ("exact",)
        }
        

class Query(graphene.ObjectType):
    all_jobs = DjangoFilterListField(JobType)

    
    
