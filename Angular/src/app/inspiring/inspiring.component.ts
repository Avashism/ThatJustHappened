import { Component, OnInit } from '@angular/core';
import {StorycontentComponent} from '../storycontent/storycontent.component';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {SERVER_ROOT} from '../config';

@Component({
  selector: 'app-inspiring',
  templateUrl: './inspiring.component.html',
  styleUrls: ['./inspiring.component.css']
})
export class InspiringComponent implements OnInit {
    public storytitle;
    public test;
    search;
    SortBy;
    id;
    public dtitle;
    public storyContent;
    public name;
    public icon = '/assets/images/inspiring.jpeg';
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
            (`${SERVER_ROOT}/Retrive/GetStoriesByCategory/3`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });
        } else {
            this.http.get<any>
            (`${SERVER_ROOT}/Retrive/GetStoriesByReact/3`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });

        }
    }
}