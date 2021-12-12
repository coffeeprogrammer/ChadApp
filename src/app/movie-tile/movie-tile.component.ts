import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../data/movie-model';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {

  @Input('movie') movie!: MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
