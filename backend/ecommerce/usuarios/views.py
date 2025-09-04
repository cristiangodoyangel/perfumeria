# usuarios/views.py
from rest_framework import generics
from .serializers import RegistroUsuarioSerializer
from rest_framework.permissions import AllowAny
from .models import Usuario

class RegistroUsuarioView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = RegistroUsuarioSerializer
    permission_classes = [AllowAny]
