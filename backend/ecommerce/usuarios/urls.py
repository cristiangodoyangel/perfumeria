from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, RegistroUsuarioView

router = DefaultRouter()
router.register(r'', UsuarioViewSet, basename='usuario')

urlpatterns = [
    path('registro/', RegistroUsuarioView.as_view(), name='registro-usuario'),
    path('', include(router.urls)),
]
