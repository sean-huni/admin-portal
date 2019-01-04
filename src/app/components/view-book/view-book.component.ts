import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {DeleteBookService} from '../../services/delete-book/delete-book.service';
import {ViewBookService} from '../../services/view-book/view-book.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmationComponent} from '../dialog/confirmation/confirmation.component';


@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  private selectedBook: Book;
  private checked: boolean;
  private bookArrList: Book[];
  private allChecked: boolean;
  private removeBookArrList: Book[] = [];

  constructor(private viewBookService: ViewBookService,
              private deleteBookService: DeleteBookService,
              private router: Router,
              public dialog: MatDialog) {
  }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewDetail', this.selectedBook.id]);
  }

  ngOnInit() {
    this.refreshBookList();
  }

  refreshBookList() {
    this.viewBookService.getBooks().subscribe(
      (res) => {
        this.bookArrList = res['body'];
      }, error => {
        console.log(error);
      }
    );
  }

  updateRemoveBookArrList(checked: boolean, book: Book) {
    if (checked) {
      this.removeBookArrList.push(book);
    } else {
      this.removeBookArrList.splice(this.removeBookArrList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean) {
    if (checked) {
      this.allChecked = true;
      this.removeBookArrList = this.bookArrList.slice();
    } else {
      this.allChecked = false;
      this.removeBookArrList = [];
    }

  }

  onDeleteAllBooksDialog() {
    const dialogRef = this.dialog.open(ConfirmationComponent, {data: 'All Selected Books'});
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          this.removeBookArrList.forEach(value => {
            this.processDelete(value);
          });
        }
        this.refreshBookList();
      });
  }

  private processDelete(value) {
    this.deleteBookService.deleteSelectedBook(value.id).subscribe(
      success => {
        console.log(success);
        // location.reload();
      }, error => {
        console.log(error);
      });
  }

  onDeleteSingleBookDialog(book: Book) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {data: book.title});
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          // this.deleteBookService.deleteSelectedBook(book.id).subscribe(
          //   success => {
          //     console.log(success);
          //     this.refreshBookList();
          //     // location.reload();
          //   }, error => {
          //     console.log(error);
          //   }
          // );
          this.processDelete(book);
          this.refreshBookList();
        }
      }
    );
  }
}
