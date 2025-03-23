import { Injectable } from "@angular/core";
import { UserDetail } from "../models/UserModels";
import { mockUserDetailData } from "../mock/UserMockData";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    public userLogin(user: any): Observable<any> {
      return this.http.post('http://localhost:8000/login', user)
    }

    // private loggedInUser: UserDetail | null = null;

    // login(email: string, password: string) : boolean {
    //     const user = mockUserDetailData.find(u => u.email === email && u.password === password);

    //     if (user){
    //         this.loggedInUser = user;
    //         return true;
    //     }
    //     return false;
    // }

    // getLoggedInUser(): UserDetail | null {
    //     return this.loggedInUser;
    // }
}