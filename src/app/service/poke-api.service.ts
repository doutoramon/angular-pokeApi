import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  poke = [];
  private url = 'https://pokeapi.co/api/v2/pokemon';
  // private url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  public urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  public urlName = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url + `?limit=52&offset=0`);
  }

  getData(name: string) {
    return this.http.get(this.url + `/${name}`)
  }

  public getDetails(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
