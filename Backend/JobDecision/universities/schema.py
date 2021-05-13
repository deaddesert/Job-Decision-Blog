import graphene

from .models import Universities

from graphene_django import DjangoObjectType


class UniversityType(DjangoObjectType):
    class Meta:
        model = Universities
        

class Query(graphene.ObjectType):
    all_universities = graphene.List(UniversityType)

    def resolve_all_universities(self, info, **kwargs):
        return Universities.objects.all()