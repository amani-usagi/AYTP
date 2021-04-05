from django.core.mail import send_mail,mail_admins,mail_managers
from django.conf import settings


header      = "Header goes here"
message     = "This is the mesage the user wants sent to send"
receipeints = ["receiver@gmail.com"]
sampleHtmlMessage = """
<style>
</style>
<h1>Large H1 </h1>
<ul>
<li>Lists</li>
<li>Lists</li>
<li>Lists</li>
<li>Lists</li>
<ul>
"""
send_mail(
    header,
    message,
    settings.EMAIL_HOST_USER,
    receipeints,
    fail_silently=True,
    html_message=sampleHtmlMessage
)
