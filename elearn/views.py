from django.shortcuts import render
from django.shortcuts import (get_object_or_404, render, HttpResponseRedirect)
  
# Create your views here.
from .forms import SchoolsForm, SubjectsForm, CoursesForm, ModulesForm, ContentsForm, TextsForm, FilesForm, ImagesForm, VideosForm
from .models import Schools, Subject, Course, Module, Content, ItemBase, Text, File, Image, Video 

#SCHOOL CRUD FUNCTIONS
  
def create_schools(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = SchoolsForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_schools.html", context)


 
def list_schools(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Schools.objects.all()
          
    return render(request, "list_schools.html", context)


# pass id attribute from urls
def detail_schools(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Schools.objects.get(id = id)
          
    return render(request, "detail_schools.html", context)


# update view for details
def update_schools(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Schools, id = id)
  
    # pass the object as instance in form
    form = SchoolsForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/schools"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_schools.html", context)


# delete view for details
def delete_schools(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Schools, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/schools/list")

          
    return render(request, "delete_schools.html", context)







#subject CRUD FUNCTIONS
def create_subjects(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = SubjectsForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_subjects.html", context)


def list_subjects(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Subject.objects.all()
          
    return render(request, "list_subjects.html", context)


# pass id attribute from urls
def detail_subjects(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Subject.objects.get(id = id)
          
    return render(request, "detail_subjects.html", context)


# update view for details
def update_subjects(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Subjects, id = id)
  
    # pass the object as instance in form
    form = SubjectsForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/subjects/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_subjects.html", context)

  
# delete view for details
def delete_subjects(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Subject, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/subjects/list")
  
    return render(request, "delete_subjects.html", context)








#course CRUD FUNCTIONS
def create_courses(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = CoursesForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_courses.html", context)


 
def list_courses(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Course.objects.all()
          
    return render(request, "list_courses.html", context)


# pass id attribute from urls
def detail_courses(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Course.objects.get(id = id)
          
    return render(request, "detail_courses.html", context)


# update view for details
def update_courses(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Course, id = id)
  
    # pass the object as instance in form
    form = CoursesForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/courses/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_courses.html", context)


# delete view for details
def delete_courses(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Course, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/courses/list")
  
    return render(request, "delete_courses.html", context)







#module CRUD FUNCTIONS
def create_modules(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = ModulesForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_modules.html", context)


 
def list_modules(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Module.objects.all()
          
    return render(request, "list_modules.html", context)


# pass id attribute from urls
def detail_modules(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Module.objects.get(id = id)
          
    return render(request, "detail_modules.html", context)


# update view for details
def update_modules(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Module, id = id)
  
    # pass the object as instance in form
    form = ModulesForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/modules/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_modules.html", context)


# delete view for details
def delete_modules(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Module, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/modules/list/")
  
    return render(request, "delete_modules.html", context)







#content CRUD FUNCTIONS
def create_contents(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = ContentsForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_contents.html", context)


 
def list_contents(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Content.objects.all()
          
    return render(request, "list_contents.html", context)


# pass id attribute from urls
def detail_contents(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Contents.objects.get(id = id)
          
    return render(request, "detail_contents.html", context)


# update view for details
def update_contents(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Contents, id = id)
  
    # pass the object as instance in form
    form = ContentsForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/contents/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_contents.html", context)

  
# delete view for details
def delete_contents(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Contents, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/contents/list/")
  
    return render(request, "delete_contents.html", context)







#text CRUD FUNCTIONS
def create_texts(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = TextsForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_texts.html", context)


 
def list_texts(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Text.objects.all()
          
    return render(request, "list_texts.html", context)


# pass id attribute from urls
def detail_texts(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Text.objects.get(id = id)
          
    return render(request, "detail_texts.html", context)


# update view for details
def update_texts(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Text, id = id)
  
    # pass the object as instance in form
    form = TextsForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/texts/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_texts.html", context)


# delete view for details
def delete_texts(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Text, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/texts/list/")
  
    return render(request, "delete_texts.html", context)







#file CRUD FUNCTIONS
def create_files(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = FilesForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_files.html", context)


 
def list_files(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = File.objects.all()
          
    return render(request, "list_files.html", context)


# pass id attribute from urls
def detail_files(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = File.objects.get(id = id)
          
    return render(request, "detail_files.html", context)


# update view for details
def update_files(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(File, id = id)
  
    # pass the object as instance in form
    form = FilesForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/files/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_files.html", context)

  
# delete view for details
def delete_files(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(File, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/files/list/")
  
    return render(request, "delete_files.html", context)







#image CRUD FUNCTIONS
def create_images(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = ImagesForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_images.html", context)


 
def list_images(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Image.objects.all()
          
    return render(request, "list_images.html", context)


# pass id attribute from urls
def detail_images(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Image.objects.get(id = id)
          
    return render(request, "detail_images.html", context)


# update view for details
def update_images(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Image, id = id)
  
    # pass the object as instance in form
    form = ImagesForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/images/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_images.html", context)


# delete view for details
def delete_images(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Image, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/images/list/")
  
    return render(request, "delete_images.html", context)







#video CRUD FUNCTIONS
def create_videos(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    form = VideosForm(request.POST or None)
    if form.is_valid():
        form.save()
          
    context['form']= form
    return render(request, "create_videos.html", context)


 
def list_videos(request):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["dataset"] = Video.objects.all()
          
    return render(request, "list_videos.html", context)


# pass id attribute from urls
def detail_videos(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # add the dictionary during initialization
    context["data"] = Video.objects.get(id = id)
          
    return render(request, "detail_videos.html", context)


# update view for details
def update_videos(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Video, id = id)
  
    # pass the object as instance in form
    form = GeeksForm(request.POST or None, instance = obj)
  
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/elearn/videos/"+id)
  
    # add form dictionary to context
    context["form"] = form
  
    return render(request, "update_videos.html", context)

  
# delete view for details
def delete_videos(request, id):
    # dictionary for initial data with 
    # field names as keys
    context ={}
  
    # fetch the object related to passed id
    obj = get_object_or_404(Video, id = id)
  
  
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to 
        # home page
        return HttpResponseRedirect("/elearn/videos/list/")
  
    return render(request, "delete_videos.html", context)

