from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularSwaggerView, SpectacularRedocView, SpectacularAPIView
from rest_framework.routers import DefaultRouter
from usuarios.views import UsuarioViewSet
from productos.views import ProductoViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from carrito.views import CarritoViewSet  # Asegúrate de importar el CarritoViewSet

# DefaultRouter para manejar las rutas automáticamente
router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuario')  # Usuarios
router.register(r'productos', ProductoViewSet, basename='producto')  # Productos
router.register(r'carrito', CarritoViewSet, basename='carrito')  # Carrito de compras

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/', include(router.urls)),  # Incluye el router con todas las rutas

    # Auth
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Documentación de la API
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
