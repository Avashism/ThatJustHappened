import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class StoryService {
    constructor(private http: HttpClient) {

    }

    submit(title, event, category) {

    }
}
