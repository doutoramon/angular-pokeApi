import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private setPokemons: any[] = [];
  public getPokemons: any[] = [];

  constructor(
    private pokeApi: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList() {
    this.pokeApi.getList().subscribe((response: any) => {
      response.results.forEach((res: any) => {
        this.pokeApi.getData(res.name).subscribe((result: any) => {
          this.setPokemons.push(result);
          this.getPokemons = this.setPokemons;
          console.log(this.setPokemons);
        });
      });
    });
  }

  public getSearch(value: any) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getPokemons = filter;
  }

  public goToData(data: any) {
    this.router.navigateByUrl(`details/${data.id}`);
  }
}
