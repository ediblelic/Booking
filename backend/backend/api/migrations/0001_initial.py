# Generated by Django 4.0.5 on 2022-06-17 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Companyinfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=30, null=True)),
                ('addres', models.CharField(max_length=30, null=True)),
                ('phoneNum', models.CharField(max_length=30, null=True)),
            ],
        ),
    ]
