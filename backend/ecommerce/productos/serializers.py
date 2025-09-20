from rest_framework import serializers
from .models import Producto, Categoria

class ProductoSerializer(serializers.ModelSerializer):
    categorias = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all(), many=True)  # Para manejar múltiples categorías

    class Meta:
        model = Producto
        fields = '__all__'
