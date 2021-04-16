from django import forms
from .models import Schools, Subject, Course, Module, Text, Content, File, Image, Video
  
  
# SCHOOLS FORMS
class SchoolsForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Schools
  
        # specify fields to be used
        fields = [
            "title",
            "description",
        ]

# SUBJECTS FORMS
class SubjectsForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Subject
  
        # specify fields to be used
        fields = [
            "title",
            "slug",
        ]

# COURSE FORMS
class CoursesForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Course
  
        # specify fields to be used
        fields = [
            "owner",
            "subject",
            "title",
            "slug",
            "overview",
          #  "created",
            "students",
        ]

# MODULES FORM
class ModulesForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Module
  
        # specify fields to be used
        fields = [
            "course",
            "title",
            "description",
        ]

# CONTENTS FORM
class ContentsForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Content
  
        # specify fields to be used
        fields = [
            "module",
            "content_type",
            "object_id",
          #  "item",
        ]


# TEXT FORMS
class TextsForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Text
  
        # specify fields to be used
        fields = [
            "owner",
            "title",
        #    "created",
        #    "updated",
            "content",
        ]

# FILE FORMS
class FilesForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = File
  
        # specify fields to be used
        fields = [
            "owner",
            "title",
        #    "created",
        #    "updated",
            "file",
        ]

# IMAGE FORMS
class ImagesForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Image
  
        # specify fields to be used
        fields = [
            "owner",
            "title",
        #    "created",
        #    "updated",
            "file",
        ]

# VIDEO FORMS
class VideosForm(forms.ModelForm):
  
    # create meta class
    class Meta:
        # specify model to be used
        model = Video
  
        # specify fields to be used
        fields = [
            "owner",
            "title",
        #    "created",
        #    "updated",
            "file",
        ]