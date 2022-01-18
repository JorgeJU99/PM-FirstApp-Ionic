import { Injectable } from '@angular/core';
import { Lugares } from '../entities/lugares';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  lugares: Lugares[] = [
    {
      codigo: 1,
      nombre: 'Torre Eiffel',
      imagenURL:
        'https://www.paris-forever.com/wp-content/uploads/2018/08/tour-eiffel-3.jpg',
      comentario: ['Lugar encantador🥰', 'Para enamorarse 😍', 'Quiero ir 🥲'],
    },
    {
      codigo: 2,
      nombre: 'Estatua de la Libertad',
      imagenURL:
        'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comentario: [
        'Una obra de arte!😶‍🌫️',
        'Lugar maravilloso 😍',
        'Quiero ir 🥲',
      ],
    },
    {
      codigo: 3,
      nombre: 'Las Vegas',
      imagenURL: 'https://www.viajarlasvegas.com/img/itinerario-1-dia.jpg',
      comentario: [
        'Quiero volver allá!😁',
        'Uff, me vicie 😐',
        'Regrese chiro de allá 😪',
      ],
    },
  ];

  constructor() {}

  getLugares() {
    return this.lugares;
  }

  getLugaresById(codigo: number) {
    return {
      // eslint-disable-next-line arrow-body-style
      ...this.lugares.find((ol) => {
        return (ol.codigo = codigo);
      }),
    };
  }

  addLugar(nombreAdd: string, imagenAdd: string, comentarioAdd: string[]) {
    this.lugares.push({
      codigo: this.lugares.length + 1,
      nombre: nombreAdd,
      imagenURL: imagenAdd,
      comentario: comentarioAdd,
    });
  }

  deleteLugar(codigo: number) {
    // eslint-disable-next-line arrow-body-style
    this.lugares = this.lugares.filter((ol) => {
      return ol.codigo !== codigo;
    });
  }
}
