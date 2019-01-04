import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {AddBookService} from '../../services/add-book.service';
import {UploadImgService} from '../../services/upload-img.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private imgSelectedForUpload = false;
  private selectedFiles: FileList;
  private currentFileUpload: File;
  private newBook: Book = new Book();
  private bookAdded: boolean;
  private progress: { percentage: number } = {percentage: 0};


  constructor(private addBookService: AddBookService, private uploadImgService: UploadImgService) {
  }

  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.language = 'english';
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imgSelectedForUpload = true;
  }

  onSubmit() {
    this.progress.percentage = 0;
    if (this.imgSelectedForUpload && this.selectedFiles != null) {
      this.currentFileUpload = this.selectedFiles.item(0);
    }

    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        console.log(res);
        if (this.imgSelectedForUpload && this.currentFileUpload != null) {
          this.uploadImgService.pushFileToStorage(JSON.parse(JSON.parse(JSON.stringify(res))._body).id, this.currentFileUpload).subscribe(
            event => {
              console.log(event);
              if (event.type === HttpEventType.UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
              }
            }, uploadError => {
              console.log(uploadError);
            });
        }
      },
      error => {
        console.log(error);
      }
    );

    this.bookAdded = true;
    this.newBook = new Book();
    this.newBook.language = 'english';
    this.selectedFiles = undefined;
  }
}
