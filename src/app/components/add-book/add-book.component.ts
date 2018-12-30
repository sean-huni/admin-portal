import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {AddBookService} from '../../services/add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private newBook: Book = new Book();
  private bookAdded: boolean;

  constructor(private addBookService: AddBookService) {
  }

  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.language = 'english';
  }

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        this.bookAdded = true;
        this.newBook = new Book();
        this.newBook.language = 'english';

      },
      error => {
        console.log(error);
      }
    );
  }
}
