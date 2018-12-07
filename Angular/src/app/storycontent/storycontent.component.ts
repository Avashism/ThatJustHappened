import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
import {SERVER_ROOT} from '../config';
import {HttpClient} from '@angular/common/http';



@Component({
    selector: 'app-storycontent',
    templateUrl: './storycontent.component.html',
    styleUrls: ['./storycontent.component.css']
})
export class StorycontentComponent implements OnInit {
    display;
    displayTitle;
    source ;
    source2 ;
    temp;
    count;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public http: HttpClient) {
    }

    react() {

        this.temp = this.source;
        this.source = this.source2;
        this.source2 = this.temp;
        if (this.source === this.data.iconTest) {
            this.count = '1';
        } else {
            this.count = '0';
        }
        if (this.count === '1') {
            this.http.post<string>
            (`${SERVER_ROOT}/story/ReactRegistration`,
                {
                    'StoryId': this.data.storyId,
                    'UserID': (JSON.parse(localStorage.getItem('userinfo'))).id
                }).subscribe(
                response => {
                    console.log(response);
                });
        } else {
            this.http.post<any>
        (`${SERVER_ROOT}/story/ReactDelete`,
            {
                'StoryId': this.data.storyId,
                'UserID': (JSON.parse(localStorage.getItem('userinfo'))).id
            }).subscribe(
            response => {
                console.log(response);
            });
        }
    }


    ngOnInit(): void {
        this.displayTitle = this.data.storytitle;
        this.display = this.data.storyContent;
        console.log(this.data);
            if (localStorage.getItem('logStatus') == '1') {

                this.http.post<any>
        (`${SERVER_ROOT}/story/ReactCheck`,
            {
                'StoryId': this.data.storyId,
                'UserID': (JSON.parse(localStorage.getItem('userinfo'))).id
            }).subscribe(
            response => {
                console.log(response);
                if (response) {
                    this.source = '/assets/images/silent1.png' ;
                    this.source2 = this.data.iconTest ;


                } else {
                    this.source = this.data.iconTest ;
                    this.source2 = '/assets/images/silent1.png' ;


                }
            });
        } else {
            this.source = '/assets/images/silent1.png' ;
            this.source2 = '/assets/images/silent1.png' ;

        } }
}
