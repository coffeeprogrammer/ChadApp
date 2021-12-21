import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {MovieModel} from "../data/movie-model";

@Injectable()
export class Movie {

  constructor(private http: HttpClient) {

  }

  public movies: MovieModel[] = [];


loadMovies(): Observable<MovieModel[]> {
    return this.http.get<[]>("http://localhost:13250/api/movies")
      .pipe(map(data => {
        this.movies = data;
        return this.movies;
      }));
  }




}
