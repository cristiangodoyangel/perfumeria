from django.db import models
from usuarios.models import Usuario

class Orden(models.Model):
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='ordenes')
	fecha = models.DateTimeField(auto_now_add=True)
	estado = models.CharField(max_length=30, default='pendiente')
	total = models.DecimalField(max_digits=10, decimal_places=2, default=0)

	def __str__(self):
		return f"Orden #{self.id} - {self.usuario.username}"
