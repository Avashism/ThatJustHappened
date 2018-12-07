import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/UserService';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    Firstname;
    Lastname;
    Email;
    Username;
    Password;
    regRespond

    constructor(private _userService: UserService,
                private router: Router) { }
    Register() {
        this._userService.Register(this.Username, this.Firstname, this.Lastname, this.Email, this.Password).subscribe(
            response => {
                console.log(response);
                this.regRespond = response.message;
                if (response.status != "Error") {
                    localStorage.setItem('logStatus', '1');
                    localStorage.setItem('userinfo', JSON.stringify(response));
                    this.router.navigate(['/userland']);

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
