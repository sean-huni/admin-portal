import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
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
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {LoginService} from './services/login.service';
import {AddBookService} from './services/add-book.service';
import {UploadImgService} from './services/upload-img.service';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {AddBookComponent} from './components/add-book/add-book.component';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    routing,
    MatDatepickerModule
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImgService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
