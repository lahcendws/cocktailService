import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
  providers:  [ CocktailService ]
})
export class CocktailListComponent implements OnInit {
  public cocktails: any;
  private service:CocktailService;
  constructor(private param_service: CocktailService) {
    this.service  =  param_service;
  }
  ngOnInit(): void {
    this.service.getCocktails().subscribe(response=>{
      this.cocktails = response.map(item=>{
        return new Cocktail(
          item.name,
          item.price,
          item.img
          );
      }) ;
    }
  );
  }


}
