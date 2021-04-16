from django.contrib import admin
from django.urls import path
from django.urls import include, path
import aytp.urls

#app_name='accounts'
from accounts import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('register/', views.register_request, name='register'),
    path('login/', views.login_request, name='login'),
    path('logout/', views.logout_request, name= 'logout'),
    
]