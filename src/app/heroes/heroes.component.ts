import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent {
  heroes: Hero[] = []
  selectedHero?: Hero
  onSelect = (hero: Hero):void => {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: selected hero id=${this.selectedHero.id}`)
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }
}
