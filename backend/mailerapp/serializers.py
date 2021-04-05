from rest_framework import serializers
from .models import MalingDemo
from django.core.mail import send_mail


class MailingDemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MalingDemo
        fields = '__all__'
    def create(self, request, *args, **kwargs):
        response = super(ConsultViewSet, self).create(request, *args, **kwargs)
        # sending mail can occur here 
        return response


