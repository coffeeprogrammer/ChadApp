import { Component, OnInit } from '@angular/core';

import { MovieModel } from '../data/movie-model';
import { Movie } from '../services/movie.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  moviesList: Array<MovieModel> | undefined

  constructor(public movie: Movie) { }

  ngOnInit(): void {

    this.movie.loadMovies()
      .subscribe(data => {
          // @ts-ignore
          this.moviesList = data;
          console.log(data);
        });
  }

}
