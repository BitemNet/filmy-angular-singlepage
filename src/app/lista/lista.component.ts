import { Component, OnInit } from '@angular/core';
import { Film } from '../modele/film';
import { FilmyService } from '../filmy.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor( private filmService: FilmyService) { }

  filmy: Film[];


  ngOnInit(): void {
    this.filmy = this.filmService.wszystkieFilmy();
    console.table(this.filmy);
  }

}
