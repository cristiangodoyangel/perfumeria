from rest_framework import viewsets, permissions
from .models import Reseña
from .serializers import ReseñaSerializer

class ReseñaViewSet(viewsets.ModelViewSet):
	serializer_class = ReseñaSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get_queryset(self):
		return Reseña.objects.all()
