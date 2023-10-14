import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent {
  heroes: Hero[] = []
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }
}
