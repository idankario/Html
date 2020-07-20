import datetime
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django.urls import reverse
from django.db.models import Model
from django.db import models
from django.utils import timezone
from django.conf import settings

# Create your models here.
class User(models.Model):
    userId = models.IntegerField(blank=True, null=True)
    userName = models.CharField(max_length=20)
    email = models.EmailField(max_length=75)
    password1 = models.DateTimeField(auto_now_add=True)
    password2 = models.DateTimeField(auto_now_add=True)
    date = models.DateTimeField(default=timezone.now)

# Create your models here.
class Game(models.Model):
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL)
    #userName = models.CharField(max_length=20)
    email = models.EmailField(max_length=75)
    #created_on = models.DateTimeField(auto_now_add=True)
    form = models.CharField(max_length=20)
    until = models.CharField(max_length=20)
    date = models.DateTimeField(default=timezone.now)
    grupeName = models.CharField(max_length=20)
    field=models.EmailField(max_length=40)
    nunofplayers = models.IntegerField(default=12)
    description = models.CharField(max_length=200, null=True, blank=True)
    fixed = models.BooleanField(default=False)
    private = models.BooleanField(default=False)
    password = models.CharField(max_length=20)
    phonenumber = models.CharField(max_length=20)
    #gameid = models.ForeignKey(settings.AUTH_USER_MODEL,null=True, blank=True ,on_delete=models.SET_NULL)

    
