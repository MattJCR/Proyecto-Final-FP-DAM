from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, cif, password, marca_comercial, telefono_1, email, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not cif:
            raise ValueError(_('The Email must be set'))
        cif = self.normalize_email(cif)
        marca_comercial = self.normalize_email(marca_comercial)
        telefono_1 = self.normalize_email(telefono_1)
        email = self.normalize_email(email)
        user = self.model(cif=cif, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,cif, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(cif, password, **extra_fields)
