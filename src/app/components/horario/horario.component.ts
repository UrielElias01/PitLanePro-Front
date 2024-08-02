// horario.component.ts
import { Component, OnInit } from '@angular/core';

interface Evento {
  tipo: string;
  nombre: string;
  hora: string;
}

interface Carrera {
  imagen: string;
  titulo: string;
  eventos: Evento[];
}

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  carreras: Carrera[] = [];

  ngOnInit() {
    this.cargarHorarios();
  }

  cargarHorarios() {
    this.carreras = [
      {
        imagen: 'https://th.bing.com/th/id/OIP.kZFZlPGv31Z_JG9S6yyY1wHaE8?rs=1&pid=ImgDetMain',
        titulo: 'GP Bahréin',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://tork.news/__export/1678728611538/sites/tork/img/2023/03/13/circuito_jeddah.jpg_554688468.jpg',
        titulo: 'GP Arabia Saudita',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '14:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '18:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '15:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '18:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '20:00' }
        ]
      },
      {
        imagen: 'https://images.daznservices.com/di/library/DAZN_News/dc/79/circuito-albert-park-melbourne-gp-australia-f1_192zg8rihn0nv1ewzoa01ijqww.jpg?t=-16377409',
        titulo: 'GP Australia',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '12:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '16:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '14:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '17:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '19:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.KRzlqewRWESGmYqNI4LihgHaE8?rs=1&pid=ImgDetMain',
        titulo: 'GP Azerbaiyán',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.1kM2r1Hbkxwh_EmklmmqTgHaE8?rs=1&pid=ImgDetMain',
        titulo: 'GP Miami',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '14:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '18:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '15:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '18:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '20:00' }
        ]
      },
      {
        imagen: 'https://www.kymillman.com/wp-content/uploads/2017/05/Monaco-Hairpin-3449.jpg',
        titulo: 'GP Mónaco',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.uzskn5Ps8tJiIe_M7uGDFQHaFj?w=600&h=450&rs=1&pid=ImgDetMain',
        titulo: 'GP Canadá',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '14:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '18:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '15:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '18:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '20:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/R.b68e4cf3f7c2a1b811b88f0616a89500?rik=CsQcfL4f9veDIA&riu=http%3a%2f%2fi.imgur.com%2fRdrzy.jpg&ehk=Qp0bIH9ssvUykXUtD3OVn%2fVEI2Xo1xaTWaPIwHIff8M%3d&risl=&pid=ImgRaw&r=0',
        titulo: 'GP Gran Bretaña',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://okdiario.com/img/2019/09/11/misano-motogp.jpg',
        titulo: 'GP Hungría',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.8fX9ck2MGiZI_qpDFh0frgHaFh?w=1610&h=1200&rs=1&pid=ImgDetMain',
        titulo: 'GP Italia',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.xDZVQfc8CB7EWV7JCQsqRgHaEK?w=1200&h=675&rs=1&pid=ImgDetMain',
        titulo: 'GP Japón',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '14:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '18:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '15:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '18:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '20:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.lF9aU21uhoo5YAZeslBwmwHaE8?rs=1&pid=ImgDetMain',
        titulo: 'GP Las Vegas',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.Dc-vbGjLUF5joasLJ4dHwAAAAA?rs=1&pid=ImgDetMain',
        titulo: 'GP México',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '14:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '18:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '15:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '18:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '20:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/R.3e146536e67433014094c24caf348baa?rik=zqHB4TsnTryB0Q&pid=ImgRaw&r=0',
        titulo: 'GP Brasil',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '11:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '15:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '12:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '15:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '17:00' }
        ]
      },
      {
        imagen: 'https://th.bing.com/th/id/OIP.u9UDT3MZ5qQM66x7p-UFrgAAAA?rs=1&pid=ImgDetMain',
        titulo: 'GP Abu Dabi',
        eventos: [
          { tipo: 'f1', nombre: 'Práctica 1', hora: '14:30' },
          { tipo: 'f1', nombre: 'Práctica 2', hora: '18:00' },
          { tipo: 'f1', nombre: 'Práctica 3', hora: '15:00' },
          { tipo: 'f1', nombre: 'Clasificación', hora: '18:00' },
          { tipo: 'f1', nombre: 'Carrera', hora: '20:00' }
        ]
      }
    ];
  }
}
