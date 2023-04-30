import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Planta[] = [];
  totalPlantasInterior: {[type: string]: number} = {};
  total: {[type: string]: number} = {};

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas= plantas;
      this.totalPlantasInterior = this.getTotalPlantasInterior();
    });
  }

  getTotalPlantasInterior(): {[type: string]: number} {
    const total: {[type: string]: number} = {};
    this.plantas.forEach((plantas) => {
      const tipo = plantas.tipo;
      total[tipo] = (total[tipo] || 0) + 1;
    });
    return total;
  }

  ngOnInit() {
    this.getPlantas();
  }
}
