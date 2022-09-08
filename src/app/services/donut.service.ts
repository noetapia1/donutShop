import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut, Result, Donuts } from '../interfaces/donut';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonutService {  
  constructor(private httpClient:HttpClient) { }

  getDonutList(): Observable<Result[]>{
    return this.httpClient.get<Donuts>(environment.apiEndpoint).pipe(
      map((data)=>data.results)
    );
  }

  getDonutDetail(id:string): Observable<Donut>{
    return this.httpClient.get<Donut>(environment.detailEndpoint(id));
  }
}
