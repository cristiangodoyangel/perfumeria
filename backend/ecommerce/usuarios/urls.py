# usuarios/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, RegistroUsuarioView
from rest_framework.documentation import include_docs_urls # Asegúrate de que esta importación esté correcta

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuario')

urlpatterns = [
    path('registro/', RegistroUsuarioView.as_view(), name='registro-usuario'),
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='API Documentation')),

]