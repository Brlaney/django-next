# api/serializers
from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'date', 'first_name', 'last_name', 'city', 'state', 'card', 'company', 'cost', 'status', )
