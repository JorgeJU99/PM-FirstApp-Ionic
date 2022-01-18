export class Lugares {
  codigo: number;
  nombre: string;
  imagenURL: string;
  comentario: string[];

  constructor(
    codigo: number,
    nombre: string,
    imagenURL: string,
    comentario: string[]
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.imagenURL = imagenURL;
    this.comentario = comentario;
  }
}
