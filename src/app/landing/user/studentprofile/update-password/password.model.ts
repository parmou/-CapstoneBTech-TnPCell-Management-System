export class PasswordModel{
    old: String;
    new_: String;
    new_again: String
    constructor( old: String, new_: String, new_again: String ){
      
      this.old = old;
      this.new_ = new_;
      this.new_again = new_again;
      
      
    }
  }