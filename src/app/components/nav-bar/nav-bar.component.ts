import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      },
      error => {
        console.log(error);
      }
    );

    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        console.log('Check Session Resp: ', res);
        this.loggedIn = true;
      },
      error => {
        console.log('Check Session Error: ', error);
        this.loggedIn = false;
      }
    );
  }
}
