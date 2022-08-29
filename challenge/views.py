from django.shortcuts import render
from .models import FlavorCategories, Flavors, user_submission
import w3lib.html

def submitForm(request):
        name = request.POST['name']
        email = request.POST['email']
        capability = request.POST['capability']
        message = request.POST['message']
        newsletter = request.POST['newsletter']
        new_submission = user_submission.objects.create(name=name, email=email, capability=capability, message=message, newsletter=newsletter)
        new_submission.save()

def checkUiHeight():
    unique_categories = FlavorCategories.objects.all()
    ui_height = FlavorCategories.objects.all().count()
    if ui_height > 0:
        new_ui_height = ui_height * 45.5   



def index(request):

    if request.method == 'POST':
        submitForm(request)

    unique_categories = FlavorCategories.objects.all()
    ui_height = FlavorCategories.objects.all().count()
    if ui_height > 0:
        new_ui_height = ui_height * 45.5   

    context = {
        'categories': unique_categories,
        'new_ui_height': new_ui_height,
        }

    return render(request, 'index.html', context=context)

def flavors(request):

    if request.method == 'POST':
        submitForm(request)

    unique_categories = FlavorCategories.objects.all()
    ui_height = FlavorCategories.objects.all().count()
    if ui_height > 0:
        new_ui_height = ui_height * 45.5   

    context = {
        'categories': unique_categories,
        'new_ui_height': new_ui_height,
        }

    return render(request, 'flavors.html', context=context)

def categories(request, slug):

    if request.method == 'POST':
        submitForm(request)

    unique_categories = FlavorCategories.objects.all()
    ui_height = FlavorCategories.objects.all().count()
    if ui_height > 0:
        new_ui_height = ui_height * 45.5   

    selected_category = FlavorCategories.objects.all().filter(slug=slug)
    selected_category_name = selected_category.first().name

    selected_category_id = selected_category.first().category_id

    flavors_with_category = Flavors.objects.all().filter(category=selected_category_id)
    flavors_in_category = []
    for flavor in flavors_with_category:
        flavors_in_category.append(w3lib.html.replace_entities(flavor.individual_product))



    context = {
        'categories': unique_categories,
        'new_ui_height': new_ui_height,
        'selected_category': selected_category_name,
        'flavors_in_category': flavors_in_category,
        }

    return render(request, 'flavor_categories.html', context=context)