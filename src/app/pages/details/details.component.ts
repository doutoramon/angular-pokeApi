import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  private id: any;
  private urlPokemon!: string;
  private namePokemon!: string;
  public pokemon: any;
  /* public loading */

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApi: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('INIT', this.pokemon);
    this.getDetails();
  }

  getDetails() {
    this.urlPokemon = this.pokeApi.urlPokemon;
    this.namePokemon = this.pokeApi.urlName ;

    const pokemon = this.pokeApi.getDetails(`${this.urlPokemon}/${this.id}`);
    const name = this.pokeApi.getDetails(`${this.namePokemon}/${this.id}`);

    return forkJoin([pokemon,name]).subscribe(
      res => {
        let listOne = res[0];
        let listTwo =res[1];
        
        this.pokemon = res;
        console.log('details', this.pokemon);
      }
    )
  }

}
