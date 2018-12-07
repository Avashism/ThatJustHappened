import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import {SERVER_ROOT} from '../config';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {StorycontentComponent} from '../storycontent/storycontent.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    constructor(public dialogue: MatDialog,
                public http: HttpClient) {
    }
    dtitle;
    test;
    icon;
    id;
    stories1: any[];
    stories2: any[];
    stories3: any[];
    stories4: any[];
    openDialog() {
        const dialogRef = this.dialogue.open(StorycontentComponent, {
            data: {storytitle: this.dtitle, storyContent: this.test,
                iconTest: this.icon,
                storyId: this.id}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog result: ${result}');
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.http.get<any>
        (`${SERVER_ROOT}/Retrive/GetTopStoriesByReact/1`,
        ).subscribe(
            response => {
                console.log(response);
                this.stories1 = response;
                console.log(this.stories1[0].title);
            });
        this.http.get<any>
        (`${SERVER_ROOT}/Retrive/GetTopStoriesByReact/2`,
        ).subscribe(
            response => {
                this.stories2 = response;
            });
        this.http.get<any>
        (`${SERVER_ROOT}/Retrive/GetTopStoriesByReact/3`,
        ).subscribe(
            response => {
                this.stories3 =  response;
            });
        this.http.get<any>
        (`${SERVER_ROOT}/Retrive/GetTopStoriesByReact/4`,
        ).subscribe(
            response => {
                this.stories4 =  response;
            });


    }
}


