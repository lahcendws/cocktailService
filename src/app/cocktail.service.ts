import { Injectable } from "@angular/core";
import { Cocktail } from "./cocktail";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
@Injectable({
    providedIn:  'root'
})
export  class  CocktailService {
    public cocktails=[];
  private url: string = './assets/data.json';
  constructor(private httpClient: HttpClient) {

  }

    public  getCocktails(): Observable<Cocktail[]> {
      return this.httpClient.get<Cocktail[]>(this.url);
    }

}
