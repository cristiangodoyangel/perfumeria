from rest_framework import serializers
from .models import Deseo

class DeseoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deseo
        fields = '__all__'
