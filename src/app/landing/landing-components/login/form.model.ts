export class FormModel{
    name: String;
    rollno: String;
    password: String;
    password2: String;
    constructor(name: String, rollno: String, password: String, password2: String){
      this.name= name;
      this.rollno = rollno;
      this.password = password;
      this.password2 = password2;
    }
  }