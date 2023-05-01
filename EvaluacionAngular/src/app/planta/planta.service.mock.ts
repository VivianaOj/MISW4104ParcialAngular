import { Observable, of } from 'rxjs';

import { Planta } from './planta';
import { createRandomPlanta} from './planta.mock';

export class MockPlantaService {
  PlantaData: Planta[];

  constructor() {
    this.PlantaData = Array.from({length: 3},
      () => createRandomPlanta()
    );
  }

  getPlantas(): Observable<Planta[]> {
    return of([...this.PlantaData]);
  }

}
