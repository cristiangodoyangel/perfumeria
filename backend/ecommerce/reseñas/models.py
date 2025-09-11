from django.db import models
from usuarios.models import Usuario
from productos.models import Producto

class Reseña(models.Model):
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='reseñas')
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE, related_name='reseñas')
	comentario = models.TextField()
	calificacion = models.PositiveIntegerField(default=5)
	fecha = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.usuario.username} - {self.producto.nombre} ({self.calificacion})"
