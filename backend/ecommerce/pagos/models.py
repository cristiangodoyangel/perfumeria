from django.db import models
from usuarios.models import Usuario
from ordenes.models import Orden

class Pago(models.Model):
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='pagos')
	orden = models.ForeignKey(Orden, on_delete=models.CASCADE, related_name='pagos')
	monto = models.DecimalField(max_digits=10, decimal_places=2)
	fecha = models.DateTimeField(auto_now_add=True)
	estado = models.CharField(max_length=30, default='pendiente')

	def __str__(self):
		return f"Pago #{self.id} - {self.usuario.username} - {self.monto}"
