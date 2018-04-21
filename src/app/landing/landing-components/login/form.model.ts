export class FormModel{
    name: String;
    rollno: String;
    branch: String;
    year: Number;
    password: String;
    password2: String;

    constructor(name: String, rollno: String,branch: String,year:number, password: String, password2: String){
      this.name= name;
      this.rollno = rollno;
      this.branch= branch;
      this.year = year;
      this.password = password;
      this.password2 = password2;
    }
  }