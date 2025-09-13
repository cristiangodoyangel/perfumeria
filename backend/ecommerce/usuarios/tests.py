from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

class UsuarioTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_registro_usuario(self):
        url = '/api/registro/'
        data = {
            'username': 'usuario_test',
            'email': 'test@correo.com',
            'password': 'passwordseguro123',
            'direccion': 'Calle Falsa 123',
            'telefono': '1234567890'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_login_usuario(self):
        # Crea un usuario y prueba el login
        user = get_user_model().objects.create_user(
            username='usuario_test',
            email='test@correo.com',
            password='passwordseguro123'
        )
        url = '/api/login/'
        data = {'username': 'usuario_test', 'password': 'passwordseguro123'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)  # Verifica que el token de acceso esté en la respuesta