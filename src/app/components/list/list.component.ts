import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //filter: string = '';

  test(nameSearch: string) {
    console.log(nameSearch);
  }

  constructor() { }

  ngOnInit(): void {
  }


  
}
