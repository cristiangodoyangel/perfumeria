from rest_framework import serializers
from .models import Usuario
from django.contrib.auth import get_user_model

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario  # Aquí estás usando tu modelo personalizado
        fields = ['id', 'username', 'email', 'direccion', 'telefono']

class RegistroUsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Este campo es solo para la creación del usuario, no para leerlo

    class Meta:
        model = get_user_model()  # Esto asegura que se use el modelo de usuario adecuado (el personalizado si se usa)
        fields = ['username', 'email', 'password', 'direccion', 'telefono']  # Incluye 'password'

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
