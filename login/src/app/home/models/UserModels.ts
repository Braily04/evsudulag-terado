export interface UserDetail {
    email: string;
    password: string;
    personalDetail: {
        name: string;
        email: string;
        id: number;
        role: string;
        age: number,
        occupation: string;
        imgUrl: string;
        alias: string;
        gender: string,
        nationality: string,
        weak: string,
        gear: string
    }
    
}