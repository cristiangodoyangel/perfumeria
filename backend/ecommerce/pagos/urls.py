from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PagoViewSet

router = DefaultRouter()
router.register(r'payments', PagoViewSet, basename='pago')

urlpatterns = [
    path('', include(router.urls)),
]
