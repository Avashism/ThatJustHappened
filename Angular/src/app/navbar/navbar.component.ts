import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  isUserLoggedIn;
  toggle = false ;
  Username = 'check';
  constructor() {
  }
    clearLocal() {
        localStorage.setItem('logStatus', null);
        localStorage.setItem('userinfo', null);

        /*
                this.ngOnInit();
        */
    }
    toggleMenu() {
    this.toggle = !this.toggle;
    }

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem('logStatus');
    if ( this.isUserLoggedIn == 1) {
        this.Username = JSON.parse(localStorage.getItem('userinfo')).username;
    } else {
      this.Username = null;
    }/*console.log(this.Username + "sad");*/
  }
    ngDoCheck() {
      this.ngOnInit();
    }

}
