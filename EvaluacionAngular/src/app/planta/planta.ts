export class Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: Date;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;

  public constructor(id: number, nombre_comun: string,
  nombre_cientifico: string,   tipo: Date,   altura_maxima: number,
  clima: string,  sustrato_siembra: string){
    this.id=id;
    this.nombre_comun=nombre_comun;
    this.nombre_cientifico=nombre_cientifico;
    this.tipo=tipo;
    this.altura_maxima=altura_maxima;
    this.clima = clima;
    this.sustrato_siembra = sustrato_siembra;
  }
}

  export class PlantaDetail extends Planta {

    public constructor(id: number, nombre_comun: string,
      nombre_cientifico: string,   tipo: Date,   altura_maxima: number,
      clima: string,  sustrato_siembra: string) {
      super(id, nombre_comun, nombre_cientifico, tipo, altura_maxima, clima,sustrato_siembra );

      }
  }
