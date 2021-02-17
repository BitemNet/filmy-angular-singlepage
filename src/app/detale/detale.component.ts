import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmyService } from '../filmy.service';
import { Film } from '../modele/film';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmyService,
    private location: Location
  ) { }

  film: Film;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    this.film = this.filmService.getFilm(Number(id));
  }

  cofnij(): void {
    this.location.back();
  }

}
