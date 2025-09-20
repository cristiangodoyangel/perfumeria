from rest_framework import viewsets, permissions
from .models import Carrito
from .serializers import CarritoSerializer

from productos.models import Producto
from rest_framework.exceptions import ValidationError

class CarritoViewSet(viewsets.ModelViewSet):
    serializer_class = CarritoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Carrito.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        producto = serializer.validated_data['producto']
        cantidad = serializer.validated_data['cantidad']

        # Verificar si la cantidad en stock es suficiente
        if cantidad > producto.stock:
            raise ValidationError(f"No hay suficiente stock del producto {producto.nombre}. Solo quedan {producto.stock} unidades.")

        # Si el stock es suficiente, guarda el carrito
        serializer.save(usuario=self.request.user)
