import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {Book} from '../../../model/book';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

}
