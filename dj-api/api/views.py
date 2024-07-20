# api/views.py
from rest_framework import generics
from .models import Order
from .serializers import OrderSerializer
from django.http import JsonResponse
from .random_data import generate_random_order
import json

def apiOverview(request):
    return JsonResponse('API Base point', safe=False)

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

def generate_random_orders(request):
    count = request.GET.get('count', 20)  # Default value if 'count' is not provided
    
    try:
        count = int(count)
    except ValueError:
        return JsonResponse({'error': 'Invalid count parameter'}, status=400)
    
    orders = [generate_random_order() for _ in range(int(count))]
    data = [
        {
            'id': order.id,
            'date': order.date,
            'first_name': order.first_name,
            'last_name': order.last_name,
            'city': order.city,
            'state': order.state,
            'card': order.card,
            'company': order.company,
            'cost': order.cost,
            'status': order.status,
        }
        for order in orders
    ]
    
    return JsonResponse(data, safe=False)