from django.urls import path

from . import views

app_name = 'game'  # app name to specify routes but it's optional

urlpatterns = [
    path('', views.homepage,name='home'),
    path('contacts', views.contacts, name='contacts'),
    path('createGame', views.createGame, name='createGame'),
    path('myGame', views.myGame, name='myGame'),


]