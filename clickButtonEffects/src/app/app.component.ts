import { Component} from '@angular/core';


@Component({
  selector: 'app-root', // <app-root></app-root>
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalBoxesGroup = 3;
  boxesPerPage = 3;
  currentPage = 1;

  get totalPages() {
    let totalPages = Math.ceil(this.totalBoxesGroup / this.boxesPerPage);
    //math.ceil is used to round up the number to the nearest integer
    return totalPages;
  }
}

// pagination method starts with the following code snippet
// 
