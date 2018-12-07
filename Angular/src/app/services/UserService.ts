import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_ROOT } from '../config';

@Injectable()

export class UserService {
    constructor(private http: HttpClient) {

    }

    Login(email, password) {
        return this.http.post<any>(`${SERVER_ROOT}/login`, {'email': email, 'password': password});
    }
    Register(Username, Firstname, Lastname, Email, Password) {
        return this.http.post<any>(`${SERVER_ROOT}/user`,
            {'Username': Username, 'Firstname': Firstname, 'Lastname': Lastname, 'email': Email, 'Password': Password});
    }
}
