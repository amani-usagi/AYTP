from django.contrib import admin

# Register your models here.

from .models import Schools, Subject, Course, Module, Content, ItemBase, Text, File, Image, Video 

admin.site.register(Schools)
admin.site.register(Subject)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Content)
#admin.site.register(ItemBase)
admin.site.register(Text)
admin.site.register(File)
admin.site.register(Image)
admin.site.register(Video)
