import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isStyleUrlResolvable} from '@angular/compiler/src/style_url_resolver';

@Component({
    selector: 'app-commentbox',
    templateUrl: './commentbox.component.html',
    styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
    // constructor(private httpClient: HttpClient) {}
    // message;
    // showComment = false;
    // comment: any = {};
    //
    // postComments() {
    //     this.httpClient.post<any>( 'localhost:2222', {'message': this.message).subscribe(
    //         response => {
    //             console.log(response);
    //         }
    //     );
    //     this.message = '';
    // }
    //
    // toggleComments() {
    //     this.showComment = !this.showComment;
    // }
    ngOnInit() {}
}
