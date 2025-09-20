from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularSwaggerView, SpectacularRedocView, SpectacularAPIView
from rest_framework.routers import DefaultRouter
from usuarios.views import UsuarioViewSet
from productos.views import ProductoViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from carrito.views import CarritoViewSet
from categorias.views import CategoriaViewSet
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuario') 
router.register(r'productos', ProductoViewSet, basename='producto') 
router.register(r'carrito', CarritoViewSet, basename='carrito') 
router.register(r'categorias', CategoriaViewSet, basename='categoria')  





urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/', include(router.urls)), 

    # Auth
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Documentación de la API
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)