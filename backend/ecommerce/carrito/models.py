from django.db import models
from usuarios.models import Usuario
from productos.models import Producto

class Carrito(models.Model):
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='carritos')
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
	cantidad = models.PositiveIntegerField(default=1)
	agregado = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.usuario.username} - {self.producto.nombre} ({self.cantidad})"
