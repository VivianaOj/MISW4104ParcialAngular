import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PlantaDetail } from './planta';


@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  constructor(private http: HttpClient) { }

      getPlantas(): Observable<PlantaDetail[]> {
        return this.http.get<PlantaDetail[]>(environment.apiUrl + '/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json').pipe(
          map(plantas => { plantas.sort((a, b) => a.nombre_comun.localeCompare(b.nombre_comun)); return plantas; } )
        );
      }

      getPlanta(id: string): Observable<PlantaDetail> {
        return this.http.get<PlantaDetail>(environment.apiUrl + '/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json' + id);
      }
  }
