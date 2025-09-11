from django.db import models

class Oferta(models.Model):
	codigo = models.CharField(max_length=50, unique=True)
	descripcion = models.TextField(blank=True)
	descuento = models.DecimalField(max_digits=5, decimal_places=2)
	activo = models.BooleanField(default=True)
	fecha_inicio = models.DateTimeField()
	fecha_fin = models.DateTimeField()

	def __str__(self):
		return self.codigo
