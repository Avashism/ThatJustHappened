import { Component, OnInit } from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {StoryComponent} from '../story/story.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

    constructor(public dialog: MatDialog,
                private router: Router,
                public snackBar: MatSnackBar) {}

    openDialog() {
        if (localStorage.getItem('logStatus') == '1') {
        const dialogRef = this.dialog.open(StoryComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        }); } else {
            this.router.navigate(['/login']);
            this.snackBar.open("Please Login to Upload a Story","Thank You", {verticalPosition: 'top',
                horizontalPosition: 'center', duration: 8000, } );

        }
    }

  ngOnInit() {
  }

}
