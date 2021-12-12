import { Component, OnInit } from '@angular/core';

import { MovieModel } from '../data/movie-model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  movies: Array<MovieModel> = [
    { title: "Star Wars",
      year: 1978,
      rating: 7,
      writer: "George Lucas",
      director: "George Lucas",
      synopsis: "the force will not fix the hyper drive"
    },
    { title: "Star Wars2",
    year: 1978,
    rating: 7,
    writer: "George Lucas3",
    director: "George Lucas",
    synopsis: "the force will not fix the hyper drive"
    },
    { title: "Star Wars4",
      year: 1978,
      rating: 7,
      writer: "George Lucas",
      director: "George Lucas",
      synopsis: "the force will not fix the hyper drive"
},
    { title: "Star Wars5",
    year: 1978,
    rating: 7,
    writer: "George Lucas",
    director: "George Lucas",
    synopsis: "the force will not fix the hyper drive"
    },
    { title: "Star Wars",
    year: 1978,
    rating: 7,
    writer: "George Lucas",
    director: "George Lucas",
    synopsis: "the force will not fix the hyper drive"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  
  }

}
