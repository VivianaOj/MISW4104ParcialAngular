/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlantaListComponent } from './planta-list.component';
import { PlantaService } from '../planta.service';
import { MockPlantaService } from '../planta.service.mock';


describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  const mockPlantaService = new MockPlantaService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaListComponent ],
      providers: [{ provide: PlantaService, useValue: mockPlantaService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the number interior planta', () => {
    let total = 0;
    for (const planta of mockPlantaService.PlantaData) {
      if (planta.tipo === 'Interior')
        total++;
    }

    const interior = fixture.debugElement.query(By.css('[data-testid="Interior"]'));
    expect(interior.nativeElement.textContent).toBe(String(total));
  });

  it('should contain the number Exterior planta', () => {
    let total = 0;
    for (const planta of mockPlantaService.PlantaData) {
      if (planta.tipo === 'Exterior')
        total++;
    }

    const interior = fixture.debugElement.query(By.css('[data-testid="Exterior"]'));
    expect(interior.nativeElement.textContent).toBe(String(total));
  });


  it('should create a table with 3 rows plus header', () => {
    component.plantas = [
      { id:1, nombre_comun: 'Planta 1', tipo: 'Interior',altura_maxima:140, clima:'Templado', nombre_cientifico:'Sansevieria',sustrato_siembra:'Tierra orgánica con buen drenaje' },
      { id:2, nombre_comun: 'Planta 2', tipo: 'Exterior',altura_maxima:140, clima:'Templado', nombre_cientifico:'Sansevieria',sustrato_siembra:'Tierra orgánica con buen drenaje' },
      { id:3, nombre_comun: 'Planta 3', tipo: 'Interior',altura_maxima:140, clima:'Templado', nombre_cientifico:'Sansevieria',sustrato_siembra:'Tierra orgánica con buen drenaje' },
    ];
    fixture.detectChanges();

    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);

    const headerRow = tableRows[0];
    expect(headerRow.cells[1].textContent).toBe('Nombre Común');
    expect(headerRow.cells[2].textContent).toBe('Tipo');

    const row1 = tableRows[1];
    expect(row1.cells[1].textContent).toBe('Planta 1');
    expect(row1.cells[2].textContent).toBe('Interior');

    const row2 = tableRows[2];
    expect(row2.cells[1].textContent).toBe('Planta 2');
    expect(row2.cells[2].textContent).toBe('Exterior');

    const row3 = tableRows[3];
    expect(row3.cells[1].textContent).toBe('Planta 3');
    expect(row3.cells[2].textContent).toBe('Interior');
  });
});

