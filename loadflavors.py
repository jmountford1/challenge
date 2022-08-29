import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nlu_challenge.settings")
from django.db import models
import csv
from challenge.models import Flavors, FlavorCategories


def run():
    with open('flavors.csv') as file:
        reader = csv.reader(file)
        next(reader)

        for row in reader:
            print(row)

            category, _ = FlavorCategories.objects.get_or_create(name=row[1], slug=row[1])

            flavor = Flavors(id=row[0],
                        category=category,
                        individual_product=row[2])
            flavor.save()