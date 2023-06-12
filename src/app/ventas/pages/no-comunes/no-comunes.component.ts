import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string="David";
  genero:string = "masculino";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes:string[] = ["Maria","Pedro","Juan"];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperano',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  };

  cambiarPersona() {
    this.genero="femenino";
    this.nombre="Amanda"
  }

  borrarCliente() {
    this.clientes.pop()
  }

  //keyValue Pipe
  persona = {
    nombre:"David",
    edad:32,
    direccion:"Baena"
  }

  //JSONPipe
  heroes= [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ];

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4....

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos una promesa")
    }, 3500);
  })

}
