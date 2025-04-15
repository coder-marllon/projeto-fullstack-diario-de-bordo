from django.shortcuts import render
from rest_framework import viewsets
from .models import Registro
from .serializers import RegistroSerializer

class RegistroViewSet(viewsets.ModelViewSet):
    queryset = Registro.objects.all().order_by('-criado_em')
    serializer_class = RegistroSerializer

