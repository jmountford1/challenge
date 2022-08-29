from django.contrib import admin
from .models import Flavors, FlavorCategories, user_submission

#admin.site.register(Flavors)

class FlavorsAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'individual_product')

class FlavorCategoriesAdmin(admin.ModelAdmin):
    list_display = ('category_id', 'name')

class UserSubmissionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'capability', 'email', 'message')

admin.site.register(Flavors, FlavorsAdmin)
admin.site.register(user_submission, UserSubmissionAdmin)
admin.site.register(FlavorCategories, FlavorCategoriesAdmin)
