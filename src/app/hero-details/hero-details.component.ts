import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.sass']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero

  constructor(
    private route: ActivatedRoute,
    private location : Location,
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
      this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe((hero) => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack())
    }
  }
}
