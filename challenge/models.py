from sre_parse import CATEGORIES
from django.db import models
from django.urls import reverse

class FlavorCategories(models.Model):

    category_id = models.AutoField(
        primary_key="true",
        )

    name = models.CharField(max_length=100)

    slug = models.SlugField(max_length=40)

    def __str__(self):
                return self.name

    def get_absolute_url(self):
        return reverse('model-detail-view', args=[str(self.category_id)])

class Flavors(models.Model):

    id = models.AutoField(
        primary_key="true",
        )

    category = models.ForeignKey(FlavorCategories, on_delete=models.CASCADE, default=0,)

    individual_product = models.CharField(max_length=20)

    def __str__(self):
        return self.individual_product

    def get_absolute_url(self):
        return reverse('model-detail-view', args=[str(self.id)])

class user_submission(models.Model):

    id = models.AutoField(
        primary_key="true",
        )

    name = models.CharField(max_length=50)

    email = models.CharField(max_length=50)

    capability_menu_choices = [
        ('design', 'design'),
        ('production', 'production'),
        ('certification', 'certification'),
        ]

    capability = models.CharField(
        max_length=20,
        choices=capability_menu_choices,
        default='design',
        )

    message = models.TextField(max_length=200)

    news_letter_opt_in = [
        ('yes', 'yes'),
        ('no', 'non'),
        ]

    newsletter = models.CharField(
        max_length=3,
        choices=news_letter_opt_in,
        default='no',
        )

    def __str__(self):
        return self.name