import { Component, OnInit } from '@angular/core';
import {StorycontentComponent} from '../storycontent/storycontent.component';
import {MatDialog} from '@angular/material';
import {SERVER_ROOT} from '../config';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-emotional',
  templateUrl: './emotional.component.html',
  styleUrls: ['./emotional.component.css']
})
export class EmotionalComponent implements OnInit {
    public  storyTitle;
    public dtitle;
    public test;
    public  storyContent;
    public name;
    public icon = '/assets/images/emotional.jpg';
    search;
    id;
    SearchBy = 'username';
    SortBy;

    stories: any[];
    constructor(public dialogue: MatDialog,
                public http: HttpClient) {
    }
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


    sort() {
        this.ngOnInit();

    }

    ngOnInit() {
        if ( this.SortBy == null || this.SortBy == 'Date(New - Old)') {
            this.http.get<any>
            (`${SERVER_ROOT}/Retrive/GetStoriesByCategory/4`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });
        } else {
            this.http.get<any>
            (`${SERVER_ROOT}/Retrive/GetStoriesByReact/4`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });

        }
    }
}
