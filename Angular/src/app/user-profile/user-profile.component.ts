import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {StoryComponent} from '../story/story.component';
import {SERVER_ROOT} from '../config';
import {HttpClient} from '@angular/common/http';
import {StorycontentComponent} from '../storycontent/storycontent.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
emails: any;
dtitle;
test;
icon;
email;
userinfo;
fname;
lname;
uname;
uid;
stories;

    constructor(public dialogue: MatDialog,
                public http: HttpClient) {}
    openDialog() {
        const dialogRef = this.dialogue.open(StorycontentComponent, {
            data: {storytitle: this.dtitle, storyContent: this.test,
                iconTest: this.icon}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog result: ${result}');
        });
    }

ngOnInit() {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
this.email = this.userinfo.email;
this.fname = this.userinfo.firstname;
this.lname = this.userinfo.lastname;
this.uname = this.userinfo.username;
this.uid = this.userinfo.id;
    this.http.get<any>
    (`${SERVER_ROOT}/Retrive/GetStoriesByUser/${this.uid}`,
    ).subscribe(
        response => {
            this.stories = response;
            console.log(response);
        });
  }

}
