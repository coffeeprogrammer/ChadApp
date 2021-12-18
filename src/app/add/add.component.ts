import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movieForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      movieTitle: "",
      year: null,
      rating: null,
      writer: "",
      director: "",
      synopsis: ""
    });
  }


  saveAdd(): void {
    console.log("save add!!!");

  }

}
