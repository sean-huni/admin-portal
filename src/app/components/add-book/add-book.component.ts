import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
private newBook: Book = new Book();
private bookAdded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
