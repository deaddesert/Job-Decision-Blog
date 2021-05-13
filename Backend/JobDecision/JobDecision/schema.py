import graphene

import JobShow.schema 
import JobInformation.schema

import universities.schema



class Query(JobShow.schema.Query, JobInformation.schema.Query, universities.schema.Query ,graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)