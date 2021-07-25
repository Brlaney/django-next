# api/models.py
from django.db import models
from datetime import datetime, date

class Order(models.Model):
    date = models.DateField(auto_now_add=False, auto_now=False, blank=True, null=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    card = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    cost = models.CharField(max_length=100)
    status = models.CharField(max_length=100, default='pending')
    created = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True, null=True)

    class Meta:
        ordering = ['status']
        verbose_name_plural = 'Orders'

    def __str__(self):
        return self.first_name
