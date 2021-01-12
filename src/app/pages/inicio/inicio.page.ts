import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [

    {
      icone: "clipboard-outline",
      nome: 'Alerta',
      link: '/alert'
    },
    {
      icone: 'bag-outline',
      nome: 'Abas',
      link: '/action-sheet'
    },
    {
      icone: 'card-outline',
      nome: 'Cards',
      link: '/cards'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone: string
  nome:  string
  link:  string
}