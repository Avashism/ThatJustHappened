import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    isUserLoggedIn: any;


    constructor () {
    }

    clearLocal() {
        localStorage.setItem('logStatus', null);
        this.ngOnInit();
    }

    ngOnInit() {
        this.isUserLoggedIn = (localStorage.getItem('logStatus') == null) ? 0 : 1;
    }

}

