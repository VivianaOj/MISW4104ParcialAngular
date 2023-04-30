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
        return this.http.get<PlantaDetail[]>(environment.apiUrl);
      }
    }
