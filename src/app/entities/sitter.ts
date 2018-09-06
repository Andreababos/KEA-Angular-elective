import {SitterRating} from './rating';

export class Sitter {
    sitterId:String;
    firstName: String;
    lastName: String;
    birthDate: Date;
    gender: String;
    email: String;
    schedule: any;
    education: String;
    picture: String;
    description: String;
    location: String;
    rating: SitterRating[]; //Array<SitterRating>
    phone: String;
    hourlyWage: Number;
}