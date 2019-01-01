import {Injectable} from '@angular/core';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  filesToUpload: Array<File>;

  constructor() {
    this.filesToUpload = [];
  }

  upload(bookId: number) {
    this.makeFileRequest('http://localhost:8181/v1/books/' + bookId + '/images',
      [], this.filesToUpload).then((result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append('multipart', files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 201) {
            console.log('Image uploaded successfully!!!');
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.setRequestHeader('x-auth-token', localStorage.getItem('xAuthToken'));
      xhr.send(formData);
    });
  }
}
