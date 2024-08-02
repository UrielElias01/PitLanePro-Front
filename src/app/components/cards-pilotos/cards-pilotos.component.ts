import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-pilotos',
  templateUrl: './cards-pilotos.component.html',
  styleUrls: ['./cards-pilotos.component.css']
})
export class CardsPilotosComponent {
  pilotos = [
    {
      nombre: 'Max Verstappen',
      img: 'https://wallpapercave.com/wp/wp9839661.jpg',
      trayectoria: `
        - 2015: Toro Rosso
        - 2016-2023: Red Bull Racing
      `,
      showTrajectory: false
    },
    {
      nombre: 'Sergio Pérez',
      img: 'https://naciondeportes.com/wp-content/uploads/2021/03/checo-perez-red-bull-f1.jpg',
      trayectoria: `
        - 2011-2012: Sauber
        - 2013: McLaren
        - 2014-2020: Force India/Racing Point
        - 2021-2023: Red Bull Racing
      `,
      showTrajectory: false
    },
    {
      nombre: 'Lewis Hamilton',
      img: 'https://th.bing.com/th/id/OIP.DxeH5S361mpCF_klRO6pogHaEK?w=1600&h=900&rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2007-2012: McLaren
        - 2013-2023: Mercedes
      `,
      showTrajectory: false
    },
    {
      nombre: 'George Russell',
      img: 'https://th.bing.com/th/id/OIP.VIIkvTIRD1do_KEKJnshBgHaEw?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2019-2021: Williams
        - 2022-2023: Mercedes
      `,
      showTrajectory: false
    },
    {
      nombre: 'Fernando Alonso',
      img: 'https://th.bing.com/th/id/OIP.wMRDgG-lz-BNINj-IYIwrwAAAA?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2001: Minardi
        - 2003-2006: Renault
        - 2007: McLaren
        - 2008-2009: Renault
        - 2010-2014: Ferrari
        - 2015-2018: McLaren
        - 2021-2023: Alpine
      `,
      showTrajectory: false
    },
    {
      nombre: 'Lance Stroll',
      img: 'https://th.bing.com/th/id/OIP.J9gKKP_maTxpafmsbgHz6AAAAA?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2017-2018: Williams
        - 2019-2024: Racing Point / Aston Martin
      `,
      showTrajectory: false
    },
    {
      nombre: 'Charles Leclerc',
      img: 'https://th.bing.com/th/id/OIP.o4x-9i8VqY2KTaGT6rxtHQHaEK?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2018: Sauber
        - 2019-2023: Ferrari
      `,
      showTrajectory: false
    },
    {
      nombre: 'Carlos Sainz',
      img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/05/carlos-sainz-ferrari-1940621.jpg?itok=hi2RsKiK',
      trayectoria: `
        - 2015-2017: Toro Rosso
        - 2017-2018: Renault
        - 2019-2020: McLaren
        - 2021-2023: Ferrari
      `,
      showTrajectory: false
    },
    {
      nombre: 'Lando Norris',
      img: 'https://www.racefans.net/wp-content/uploads/2023/03/racefansdotnet-23-03-31-06-50-23-6.jpg',
      trayectoria: `
        - 2019-2023: McLaren
      `,
      showTrajectory: false
    },
    {
      nombre: 'Oscar Piastri',
      img: 'https://cdn-3.motorsport.com/images/amp/6xE3aBj0/s6/oscar-piastri-alpine-f1-1.jpg',
      trayectoria: `
        - 2023: Mclaren
      `,
      showTrajectory: false
    },
    {
      nombre: 'Esteban Ocon',
      img: 'https://th.bing.com/th/id/OIP.nOZFZyQbhSTpvLQOQlqxpgHaE8?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2016: Manor
        - 2017-2018: Force India/Racing Point
        - 2020-2023: Renault/Alpine
      `,
      showTrajectory: false
    },
    {
      nombre: 'Pierre Gasly',
      img: 'https://th.bing.com/th/id/OIP.4sIq_Z2rBraDgPCcsAoNRgHaHa?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2017: Toro Rosso
        - 2018: Toro Rosso
        - 2019: Red Bull Racing/Toro Rosso
        - 2020-2022: AlphaTauri
        - 2023: Alpine
      `,
      showTrajectory: false
    },
    {
      nombre: 'Valtteri Bottas',
      img: 'https://th.bing.com/th/id/OIP.f_OrlGQ9cjBxkX0_SXBmUQAAAA?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2013-2016: Williams
        - 2017-2021: Mercedes
        - 2022-2023: Alfa Romeo
        - 2024: Kick Sauber
      `,
      showTrajectory: false
    },
    {
      nombre: 'Zhou Guanyu',
      img: 'https://th.bing.com/th/id/OIP.VW_18I3KLkwmVE3N_Yw2SgHaE7?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2022-2023: Alfa Romeo
        - 2024: Kick Sauber
      `,
      showTrajectory: false
    },
    {
      nombre: 'Yuki Tsunoda',
      img: 'https://cdn-4.motorsport.com/images/amp/01WlMmeY/s6/yuki-tsunoda-racing-bulls-2.jpg',
      trayectoria: `
        - 2021-2023: AlphaTauri
        - 2024: Redbull Racing
      `,
      showTrajectory: false
    },
    {
      nombre: 'Daniel Ricciardo',
      img: 'https://f1-gate.com/media/img2024/20240227-honda-ricciardo.jpg',
      trayectoria: `
        - 2011: HRT
        - 2012-2013: Toro Rosso
        - 2014-2018: Red Bull Racing
        - 2019-2020: Renault
        - 2021-2022: McLaren
        - 2023: AlphaTauri
        - 2024: Redbull Racing
      `,
      showTrajectory: false
    },
    {
      nombre: 'Nico Hülkenberg',
      img: 'https://th.bing.com/th/id/OIP.Fw0mY8z1etHSc_WR702AyQHaE8?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2010: Williams
        - 2012-2016: Force India/Sauber
        - 2017-2019: Renault
        - 2020: Racing Point (sustituto)
        - 2022: Aston Martin (sustituto)
        - 2023: Haas
      `,
      showTrajectory: false
    },
    {
      nombre: 'Kevin Magnussen',
      img: 'https://cdn-6.motorsport.com/images/mgl/0ZRMkxo0/s800/kevin-magnussen-haas-1.jpg',
      trayectoria: `
        - 2014: McLaren
        - 2016: Renault
        - 2017-2020: Haas
        - 2022-2023: Haas
      `,
      showTrajectory: false
    },
    {
      nombre: 'Alexander Albon',
      img: 'https://th.bing.com/th/id/OIP.UjihLpVlJ79fVp4DWniCuQHaE8?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2019: Toro Rosso/Red Bull Racing
        - 2020: Red Bull Racing
        - 2022-2023: Williams
      `,
      showTrajectory: false
    },
    {
      nombre: 'Logan Sargeant',
      img: 'https://th.bing.com/th/id/OIP.zq5f9csKqYtebcBdP3hZPwHaE8?rs=1&pid=ImgDetMain',
      trayectoria: `
        - 2023: Williams
      `,
      showTrajectory: false
    },
  ];
  

  toggleTrajectory(piloto: any) {
    piloto.showTrajectory = !piloto.showTrajectory;
  }
}
