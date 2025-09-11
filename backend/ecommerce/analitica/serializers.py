from rest_framework import serializers
from .models import Analitica

class AnaliticaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analitica
        fields = '__all__'
