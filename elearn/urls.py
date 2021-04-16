from django.contrib import admin
from django.urls import path
from django.urls import include, path
import aytp.urls
from elearn import views

from .views import create_schools,detail_schools, delete_schools, update_schools, detail_subjects, delete_subjects, update_subjects, detail_courses, update_courses, delete_courses, detail_modules, update_modules, delete_modules, detail_contents, update_contents, delete_contents, detail_files, update_files, delete_files, detail_texts, update_texts, delete_texts, detail_images, update_images, delete_images, detail_videos, update_videos, delete_videos


urlpatterns = [ 
    #school CRUD URLs
    path('schools/create', views.create_schools, name='create'),
    path('schools/list', views.list_schools, name='list'),
    path('schools/<id>', detail_schools ),
    path('schools/<id>/update', update_schools ),
    path('schools/<id>/delete', delete_schools ),

    #subject CRUD URLs
    path('subjects/create', views.create_subjects, name='create'),
    path('subjects/list', views.list_subjects, name='list'),
    path('subjects/<id>', detail_subjects ),
    path('subjects/<id>/update', update_subjects ),
    path('subjects/<id>/delete', delete_subjects ),

    #course CRUD URLs
    path('courses/create', views.create_courses, name='create'),
    path('courses/list', views.list_courses, name='list'),
    path('courses/<id>', detail_courses ),
    path('courses/<id>/update', update_courses ),
    path('courses/<id>/delete', delete_courses ),

    #module CRUD URLs
    path('modules/create', views.create_modules, name='create'),
    path('modules/list', views.list_modules, name='list'),
    path('modules/<id>', detail_modules ),
    path('modules/<id>/update', update_modules ),
    path('modules/<id>/delete', delete_modules ),

    #content CRUD URLs
    path('contents/create', views.create_contents, name='create'),
    path('contents/list', views.list_contents, name='list'),
    path('contents/<id>', detail_contents ),
    path('contents/<id>/update', update_contents ),
    path('contents/<id>/delete', delete_contents ),

    #text CRUD URLs
    path('texts/create', views.create_texts, name='create'),
    path('texts/list', views.list_texts, name='list'),
    path('texts/<id>', detail_texts ),
    path('texts/<id>/update', update_texts ),
    path('texts/<id>/delete', delete_texts ),

    #file CRUD URLs
    path('files/create', views.create_files, name='create'),
    path('files/list', views.list_texts, name='list'),
    path('files/<id>', detail_files ),
    path('files/<id>/update', update_files ),
    path('files/<id>/delete', delete_files ),

    #image CRUD URLs
    path('images/create', views.create_images, name='create'),
    path('images/list', views.list_images, name='list'),
    path('images/<id>', detail_images ),
    path('images/<id>/update', update_images ),
    path('images/<id>/delete', delete_images ),

    #video CRUD URLs
    path('videos/create', views.create_videos, name='create'),
    path('videos/list', views.list_videos, name='list'),
    path('videos/<id>', detail_videos ),
    path('videos/<id>/update', update_videos ),
    path('videos/<id>/delete', delete_videos ),
    
]