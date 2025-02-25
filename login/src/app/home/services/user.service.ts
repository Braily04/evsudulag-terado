import { Injectable } from "@angular/core";
import { UserDetail } from "../models/UserModels";
import { mockUserDetailData } from "../mock/UserMockData";

@Injectable ({
    providedIn: 'root'
})
export class UserService {
    private loggedInUser: UserDetail | null = null;

    login(email: string, password: string) : boolean {
        const user = mockUserDetailData.find(u => u.email === email && u.password === password);

        if (user){
            this.loggedInUser = user;
            return true;
        }
        return false;
    }

    getLoggedInUser(): UserDetail | null {
        return this.loggedInUser;
    }
}