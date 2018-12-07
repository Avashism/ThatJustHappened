import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {StorycontentComponent} from '../storycontent/storycontent.component';
import { HttpClient } from '@angular/common/http';
import {SERVER_ROOT} from '../config';

@Component({
    selector: 'app-angry',
    templateUrl: './angry.component.html',
    styleUrls: ['./angry.component.css']
})
export class AngryComponent implements OnInit {
    public storyTitle;
    public dtitle;
    public test;
    public storyContent;
    public name;
    id;
    SortBy;
    search;
    public icon = '/assets/images/angry.jpg';
    stories: any[];
    SearchBy = 'username';

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
            (`${SERVER_ROOT}/Retrive/GetStoriesByCategory/1`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });
        } else {
            this.http.get<any>
            (`${SERVER_ROOT}/Retrive/GetStoriesByReact/1`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });

        }
    }
}
