from django.urls import path
from app_one import views

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    path('about/', views.About.as_view(), name='about'),
    path('projects/', views.Projects.as_view(), name='projects'),
    path('connect_four/', views.C4.as_view(), name='c4'),
    path('blackjack/', views.BJ.as_view(), name='bj'),
    path('tictactoe/', views.TTT.as_view(), name='ttt'),

]
