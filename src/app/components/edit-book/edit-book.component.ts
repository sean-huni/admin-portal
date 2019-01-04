import {Component, OnInit} from '@angular/core';
import {UploadImgService} from '../../services/upload-img/upload-img.service';
import {Book} from '../../model/book';
import {Params, ActivatedRoute, Router, Route} from '@angular/router';
import {ViewBookService} from '../../services/view-book/view-book.service';
import {EditBookService} from '../../services/edit-book/edit-book.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  private bookId: number;
  private updatedBook: Book;
  private bookUpdated: boolean;
  private imgSelectedForUpload: boolean;
  private selectedFiles: FileList;
  private currentFileUpload: File;
  private progress: { percentage: number } = {percentage: 0};

  constructor(private uploadImageService: UploadImgService,
              private editBookService: EditBookService,
              private viewBookService: ViewBookService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.bookUpdated = false;
    this.imgSelectedForUpload = false;
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.viewBookService.getBook(this.bookId).subscribe(
      res => {
        console.log(res['body']);
        this.updatedBook = res['body'];
      }, error => console.log(error));
  }

  onSubmit() {
    this.editBookService.sendBook(this.updatedBook).subscribe(
      data => {
        this.modify(this.updatedBook.id);
        this.bookUpdated = true;
      }, error1 => console.log(error1)
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imgSelectedForUpload = true;
    console.log( this.imgSelectedForUpload);
  }

  modify(bookId: number) {
    this.progress.percentage = 0;

    if (this.imgSelectedForUpload) {
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadImageService.pushFileToStorage(bookId, this.currentFileUpload).subscribe(
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
  }
}
