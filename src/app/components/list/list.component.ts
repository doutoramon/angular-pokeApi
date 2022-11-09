import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons: any[] = [];
  nameType: Array<string> = [];
  filter: string = '';

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
          this.pokemons.push(result);
          console.log(this.pokemons);
        });
      });
    });
  }

  public getSearch (value: any) {
    console.log(value);
  }
}
