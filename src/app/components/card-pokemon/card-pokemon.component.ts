import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private pokeApi: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokeApi.getList().subscribe((response: any) => {
      response.results.forEach((res:any) => {
        this.pokeApi.getData(res.name).subscribe((result: any) => {
          this.pokemons.push(result);
          console.log(this.pokemons);
        });
      });
    });
  }

}
