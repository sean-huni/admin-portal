import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {AddBookService} from '../../services/add-book.service';
import {UploadImgService} from '../../services/upload-img.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private newBook: Book = new Book();
  private bookAdded: boolean;

  constructor(private addBookService: AddBookService, private uploadImgService: UploadImgService) {
  }

  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.language = 'english';
  }

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        this.uploadImgService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
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
