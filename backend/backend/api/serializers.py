from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Companyinfo,BackgroundImages,Hotels
class Companyserializer(ModelSerializer):
    class Meta:
        model = Companyinfo
        fields= '__all__'
class Backgroundserializer(ModelSerializer):
    class Meta:
        model = BackgroundImages
        fields = '__all__'
class Hotelsserializer(ModelSerializer):
    class Meta:
        model = Hotels
        fields = '__all__'