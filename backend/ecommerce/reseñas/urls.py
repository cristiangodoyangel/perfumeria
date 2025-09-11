from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReseñaViewSet

router = DefaultRouter()
router.register(r'reviews', ReseñaViewSet, basename='reseña')

urlpatterns = [
    path('', include(router.urls)),
]
