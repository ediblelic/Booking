from django import views
from django.http import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from yaml import serialize
from .models import Companyinfo, BackgroundImages, Hotels
from .serializers import Companyserializer,Backgroundserializer,Hotelsserializer
# Create your views here.
@api_view(['GET'])
def getInfos(request):
    company_infos = Companyinfo.objects.all()
    serialize = Companyserializer(company_infos,many=True)
    return Response(serialize.data)
@api_view(['GET'])
def getPictures(request):
    pictures = BackgroundImages.objects.all()
    serialize = Backgroundserializer(pictures,many=True)
    return Response(serialize.data)
@api_view(['GET'])
def getHotels(request):
    hotels = Hotels.objects.all()
    serialize = Hotelsserializer(hotels,many=True)
    return Response(serialize.data)
