from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OfertaViewSet

router = DefaultRouter()
router.register(r'offers', OfertaViewSet, basename='oferta')

urlpatterns = [
    path('', include(router.urls)),
]
