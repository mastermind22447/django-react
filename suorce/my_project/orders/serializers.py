from rest_framework import serializers
from .models import Orders

class OrderSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.name')
    customer_id = serializers.IntegerField(source='customer.id')
    class Meta:
        model = Orders
        fields = ['id', 'name', 'quantity', 'customer_name', 'customer_id']