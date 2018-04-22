export class LoginModel{
    rollno: String;
    password: String;
    constructor( email: String, password: String){
      
      this.rollno = email;
      this.password = password;
      
    }
  }