import graphene

from .models import JobInfo

from graphene_django_extras import DjangoObjectType, DjangoFilterListField

class JobInfoType(DjangoObjectType):
    class Meta:
        model = JobInfo
        filter_fields = {"title" : ("icontains",)}

class Query(graphene.ObjectType):
    job_info = DjangoFilterListField(JobInfoType)