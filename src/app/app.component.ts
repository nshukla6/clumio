import { Component, OnInit, OnChanges} from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clumio';
  columns;
  rows;


  constructor(private movieService: MovieService){

  }
  ngOnInit() {

    this.columns = this.movieService.getColumns();

    this.movieService.getMovieData().subscribe(
      (data) => {
        this.rows = data['Search'];
      }
    );
  }
}
