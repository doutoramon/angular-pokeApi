import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  poke = [];
  url = 'https://pokeapi.co/api/v2/pokemon';
  // url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http: HttpClient) { }

  getList() {
  return this.http.get(this.url+`?limit=52&offset=0`);
  // return this.http.get(this.url+`?limit=100000&offset=0`);
  }

  getData(name: string) {
    return this.http.get(this.url+`/${name}`)
  }

  public getDetails(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
