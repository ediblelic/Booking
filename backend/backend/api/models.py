from tkinter.tix import Tree
from django.db import models

# Create your models here.
class Companyinfo(models.Model):
    email = models.CharField(null=True,max_length=(30))
    addres = models.CharField(null=True,max_length=(30))
    phoneNum = models.CharField(null=True,max_length=(30))
    def __str__(self):
        return self.email
    def __str__(self):
        return self.addres
    def __str__(self) :
        return self.phoneNum
class BackgroundImages(models.Model):
    picture1 = models.CharField(null=True,max_length=(500))
    picture2 = models.CharField(null=True,max_length=(500))
    picture3 = models.CharField(null=True,max_length=(500))
    def __str__(self):
        return self.picture1
    def __str__(self):
        return self.picture2
    def __str__(self) :
        return self.picture3
class Hotels(models.Model):
    title = models.CharField(max_length=30,null=True)
    description = models.CharField(max_length=250)
    frimg = models.CharField(null=True,max_length=400)
    sdimg = models.CharField(null=True,max_length=400)
    thimg = models.CharField(null=True,max_length=400)
    ftimg = models.CharField(max_length=400)
    amenities = models.CharField(max_length=300)
    price = models.IntegerField(null=True)
    numofpeople = models.IntegerField(null=True)
    checkin = models.DateField(default=True)
    checkout = models.DateField(default=True)
    def __str__(self):
        return self.title
    def __str__(self):
        return self.description
    def __str__(self):
        return self.frimg
    def __str__(self):
        return self.sdimg
    def __str__(self):
        return self.thimg
    def __str__(self):
        return self.ftimg
    def __str__(self):
        return self.amenities
    def __str__(self):
        return self.price
    def __str__(self):
        return self.numofpeople
    def __str__(self):
        return self.checkin
    def __str__(self):
        return self.checkout