# api/views.py
from rest_framework import generics
from .models import Order
from .serializers import OrderSerializer
from django.http import JsonResponse

def apiOverview(request):
    return JsonResponse("API Base point", safe=False)

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
