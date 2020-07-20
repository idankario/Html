from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import *



class CreateUserForm(ModelForm):
	class Meta:
		model = User
		fields = '__all__'

class OrderGame(ModelForm):
    class Meta:
		model = Game
		fieldsForm = ['email','fromtime','untiltime','date','grupeName','field','nunofplayers','description','fixed','private','password','phonenumber']

