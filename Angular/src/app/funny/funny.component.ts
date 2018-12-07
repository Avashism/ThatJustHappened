import { Component, OnInit, DoCheck } from '@angular/core';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {StorycontentComponent} from '../storycontent/storycontent.component';
import {SERVER_ROOT} from '../config';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-funny',
  templateUrl: './funny.component.html',
  styleUrls: ['./funny.component.css']
})
export class FunnyComponent implements OnInit, DoCheck {
public SortBy;
    public storyTitle;
    public dtitle;
    public test;
    public storyContent;
    public name;
    public icon = '/assets/images/funny.jpg';
    search;
    uName;
    SearchBy = 'username';
    id;
    reacts;

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
        (`${SERVER_ROOT}/Retrive/GetStoriesByCategory/2`,
        ).subscribe(
            response => {
                this.stories = response;
                console.log(response);
            });
        } else {
            this.http.get<any>
            (`${SERVER_ROOT}/Retrive/GetStoriesByReact/2`,
            ).subscribe(
                response => {
                    this.stories = response;
                    console.log(response);
                });

        }
    }

    ngDoCheck() {
    }
}