from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('flavors/', views.flavors, name="flavors"),
    path('flavors/'+'<slug>', views.categories, name="categories"),
    ]