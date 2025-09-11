from rest_framework import viewsets, permissions
from .models import Deseo
from .serializers import DeseoSerializer

class DeseoViewSet(viewsets.ModelViewSet):
	serializer_class = DeseoSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Deseo.objects.filter(usuario=self.request.user)

	def perform_create(self, serializer):
		serializer.save(usuario=self.request.user)
