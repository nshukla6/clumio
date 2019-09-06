import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/?type=movie&apikey=3dc42982&s=batman';
  constructor(private http: HttpClient) { }

  getMovieData(page: number = 1) {
    return this.http.get(`${this.url}&page=${page}`);
  }

  getColumns(): string[] {
    return ['Title', 'Year', 'imdbID', 'Type', 'Poster'];
  }
}
