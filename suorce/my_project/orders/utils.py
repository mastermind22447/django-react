from rest_framework.response import Response
from .models import Orders
from .serializers import OrderSerializer

from customer.models import Customer
from customer.serialiser import CustomerSerializer

def getOrders(request):
    orders = Orders.objects.all()
    order_serializer = OrderSerializer(orders, many=True)

    customers = Customer.objects.all()
    customer_serializer = CustomerSerializer(customers, many=True)

    return Response(
        {
            "orders": order_serializer.data, 
            "customers": customer_serializer.data})