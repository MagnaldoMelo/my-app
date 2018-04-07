import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/*
import { HEROES } from '../mock-heroes';
*/


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  /*
  heroes = HEROES;
  */
  heroes = [];

  /*selectedHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
