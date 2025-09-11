
from rest_framework import viewsets, permissions, generics
from .serializers import UsuarioSerializer, RegistroUsuarioSerializer
from .models import Usuario



class UsuarioViewSet(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Solo permite ver/editar/eliminar el propio usuario
        return Usuario.objects.filter(id=self.request.user.id)

    def get_serializer_class(self):
        if self.action == 'create':
            return RegistroUsuarioSerializer
        return UsuarioSerializer

    def perform_create(self, serializer):
        serializer.save()

class RegistroUsuarioView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = RegistroUsuarioSerializer
    permission_classes = [permissions.AllowAny]
