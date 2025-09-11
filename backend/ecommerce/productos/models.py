from django.db import models

class Producto(models.Model):
	nombre = models.CharField(max_length=100)
	descripcion = models.TextField(blank=True)
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	categoria = models.CharField(max_length=50, blank=True)
	imagen = models.ImageField(upload_to='productos/', blank=True, null=True)
	activo = models.BooleanField(default=True)
	creado = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.nombre
