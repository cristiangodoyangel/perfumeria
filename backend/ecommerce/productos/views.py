from rest_framework import viewsets, permissions
from .models import Producto
from .serializers import ProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
	queryset = Producto.objects.filter(activo=True)
	serializer_class = ProductoSerializer
	permission_classes = [permissions.AllowAny]
