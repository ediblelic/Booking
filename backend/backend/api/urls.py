from django.urls import path, include
from . import views
urlpatterns =[
    path('/infos',views.getInfos,name='getinfos'),
    path('/pictures',views.getPictures,name='getPictures'),
    path('/hotels',views.getHotels,name='getHotels')
]