import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DATE_LOCALE, MatButtonModule, MatCheckboxModule, MatDatepickerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import 'hammerjs';
import {MatGridListModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import {LoginService} from './services/login/login.service';
import {AddBookService} from './services/add-book/add-book.service';
import {UploadImgService} from './services/upload-img/upload-img.service';
import {ViewBookService} from './services/view-book/view-book.service';
import {DeleteBookService} from './services/delete-book/delete-book.service';
import {EditBookService} from './services/edit-book/edit-book.service';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {LoginComponent} from './components/login/login.component';
import {ViewBookComponent} from './components/view-book/view-book.component';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {ViewDetailComponent} from './components/view-detail/view-detail.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {ConfirmationComponent} from './components/dialog/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddBookComponent,
    ViewBookComponent,
    ViewDetailComponent,
    EditBookComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmationComponent],
  providers: [
    LoginService,
    AddBookService,
    UploadImgService,
    ViewBookService,
    EditBookService,
    DeleteBookService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
