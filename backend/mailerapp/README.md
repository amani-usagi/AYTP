# Mailing Features

For sending the email you need to first change the email and passwords it the 


elearn/settings.py
```py
EMAIL_HOST_USER     = 'youraccoutname@gmail.com'
EMAIL_HOST_PASSWORD = 'yoursecretpassword'
```


---
To Send an email just use the format illustrated below
mailerapp/\__init\__.py

```py

from django.core.mail import send_mail  
from django.conf import settings

header      = "Header goes here"
message     = "This is the mesage the user wants sent to send"
receipeints = ["receiver@gmail.com","person2@temp.com"]
sampleHtmlMessage = """
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
    fail_silently=True,             # Removes error handling
    html_message=sampleHtmlMessage
)
```


## Sending to registerd admins and managers
---
```py
# Send and email to all users who have registerd as administrators through django admin
mail_admins(
    header,
    message,
    settings.EMAIL_HOST_USER,
    receipeints,
    fail_silently=True,
    html_message=sampleHtmlMessage
)

# Send and email to all users who have registerd as managers through django admin
mail_managers(
    header,
    message,
    settings.EMAIL_HOST_USER,
    receipeints,
    fail_silently=True,
    html_message=sampleHtmlMessage
 )
```


### Issues

- [ ] Intergration of multiple sender emails 

    - This may invlove setting up our own email SMTP server and we require our own SSL certificates that can only be issued if we have a domain

    - But the implemnation only invloves using the format
    ```py
    from django.core.mail.message import EmailMessage

    with get_connection(
            host ="hostname", 
            port ="smtpPort", 
            username ="theircurrentemail@ourdomain.com" 
            password = my_password, 
            use_tls  =True 
        ) as connection:
        EmailMessage(subject1, body1, from1, [to1], connection=connection).send()
    ```

- [ ] We have to define our own templates using inline styles

    - One way is to make a dedicated app to send the email
    
        - Authentication will be had to be maintened 

    - We can opt to use sendgrid 

        - Due to nature of users emails not being consistent it might be too much overhead