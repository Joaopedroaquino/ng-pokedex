import { Component, OnInit } from '@angular/core';
import {PokeapiService} from 'src/app/service/pokeapi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemons:any;
  public getAllPokemons:any;



  constructor(
    private pokeapiService: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        
        console.log(this.getAllPokemons)}
      );
  }
  public getSearch(value:string){
const filter = this.setAllPokemons.filter( (res: any) => {
  return !res.name.indexOf(value.toLowerCase());

 });
 this.getAllPokemons=filter;

 }
}
