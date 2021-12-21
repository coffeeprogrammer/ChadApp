import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
  FormGroupDirective
} from '@angular/forms';
import {MovieModel} from "../data/movie-model";

import { Movie } from '../services/movie.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movieForm!: FormGroup;

  constructor(private fb: FormBuilder, private movie: Movie) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: "",
      year: null,
      rating: null,
      writer: "",
      director: "",
      synopsis: ""
    });
  }


  saveAdd(): void {
    console.log("save add!!!");
    let mm: MovieModel = this.movieForm.value;

    console.log(mm);
    mm.coverArtFn = "nothing.jpg";
    this.movie.saveMovie(mm).subscribe((result)=>
    {
      console.log(result);
    });

  }

}
