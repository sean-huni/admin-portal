import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/book';
import {ViewBookService} from '../../services/view-book.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  private loadedBook: Book = new Book();
  private bookId: number;

  constructor(private getBookService: ViewBookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        this.loadedBook = res['body'];
      }, error => {
        console.log(error);
      }
    );

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        this.loadedBook = res['body'];
      }, error => {
        console.log(error);
      }
    );
  }

  onSelect(book: Book) {
    this.router.navigate(['/editBook', this.loadedBook.id]);
    // .then(s => location.reload())
  }
}
