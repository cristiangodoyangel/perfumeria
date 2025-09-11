from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnaliticaViewSet

router = DefaultRouter()
router.register(r'analytics', AnaliticaViewSet, basename='analitica')

urlpatterns = [
    path('', include(router.urls)),
]
