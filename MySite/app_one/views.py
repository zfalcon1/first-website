from django.shortcuts import render
from django.views.generic import (TemplateView,ListView,
                                  DetailView,CreateView,
                                  UpdateView,DeleteView)

# Create your views here.
class Home(TemplateView):
    template_name = 'home.html'

class About(TemplateView):
    template_name = 'about.html'

class Projects(TemplateView):
    template_name = 'projects.html'

class C4(TemplateView):
    template_name = 'connect_four.html'

class BJ(TemplateView):
    template_name = 'blackjack.html'

class TTT(TemplateView):
    template_name = 'tictactoe.html'
