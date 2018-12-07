import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { SERVER_ROOT } from '../config';
import {Router} from '@angular/router';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
    public Editor = DecoupledEditor;
    Title = '';
    StoryContent = 'Your Story Here....';
    Category: any;
    public responded;
    public model = {
    };
    public onReady( editor ) {
        editor.ui.view.editable.element.parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.view.editable.element);
    }

    constructor(private http: HttpClient,
                public snackBar: MatSnackBar,
                public router: Router) { }
    submit() {
        console.log(this.Title + " " + this.StoryContent + " " + this.Category);
        console.log(`${SERVER_ROOT}/story/`);
        this.http.post<string>
        (`${SERVER_ROOT}/story/StoryRegistration`,
            {
                    'Title': this.Title,
                    'StoryContent': this.StoryContent,
                    'CategoryId': this.Category,
                    'UserID': (JSON.parse(localStorage.getItem('userinfo'))).id}).subscribe(
            response => {
                console.log(response);
            }
        );
        this.router.navigate(['/userland' , { outlets: { category: [this.Category] } }]);


    }
    openSnackBar() {
        this.snackBar.open("Your Story Has Been Submitted","Thank You", {duration: 2500, } );
    }
  ngOnInit() {
  }

}
