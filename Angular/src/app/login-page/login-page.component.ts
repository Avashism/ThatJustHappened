import {Component, EventEmitter, OnInit} from '@angular/core';
import {UserService} from '../services/UserService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    email;
    password;
    responded;
stuff;

    constructor(private _userService: UserService,
                private router: Router) {
    }

    Login() {
        this._userService.Login(this.email, this.password).subscribe(
            response => {
                console.log(response);
                if (response) {
                    this.stuff = response.email
                    localStorage.setItem('logStatus', '1');
                    localStorage.setItem('userinfo', JSON.stringify(response))
                    console.log(localStorage.getItem('logStatus'))
                    console.log(localStorage.getItem('userinfo'));
                    this.router.navigate(['/userland']);
                } else {
                    this.responded = 'Incorrect Email/Password' ;
                }
            }
        );
    }

    ngOnInit() {
    }
    onSubmit() {
        console.log();
    }


}
