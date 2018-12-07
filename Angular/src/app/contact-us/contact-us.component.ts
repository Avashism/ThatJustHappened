import { Component, OnInit } from '@angular/core';
import { SERVER_ROOT } from '../config';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name;
email;
message;

  constructor( public http: HttpClient) { }


    onSubmit() { this.http.post<any>
    (`${SERVER_ROOT}/story/ContactRegistration`,
        {
            'name': this.name,
            'email': this.email,
            'message': this.message}).subscribe(
                response => {
                    console.log(response);
                }
            );
    }
  ngOnInit() {
  }
}


