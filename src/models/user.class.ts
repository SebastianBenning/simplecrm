export class User{
    firstName: string;
    lastName: string;
    email: string;
    birthdate: number;
    street: string;
    zipcode: number;
    city: string;

    constructor(obj?:any){
        this.firstName = obj? obj.firstName : '';
        this.lastName = obj? obj.lastName : '';
        this.email = obj? obj.email : '';
        this.birthdate = obj? obj.birthdate : '';
        this.street = obj? obj.street : '';
        this.zipcode = obj? obj.zipcode : '';
        this.city = obj? obj.city : '';
    }

    public toJSON(){
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthdate: this.birthdate,
            street: this.street,
            zipcode: this.zipcode,
            city: this.city,
        }
    }
}