from rest_framework import viewsets, permissions
from .models import Oferta
from .serializers import OfertaSerializer

class OfertaViewSet(viewsets.ModelViewSet):
	serializer_class = OfertaSerializer
	queryset = Oferta.objects.all()
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]
