export class DataModel{
    inputInstitituename: String;
    inputInstititueaddress: String;
    inputStartDate: String;
    inputEndDate: String;
    
    constructor( name: String, address: String, startDate: String, endDate: String){
      this.inputInstitituename= name;
      this.inputInstititueaddress = address;
      this.inputStartDate = startDate;
      this.inputEndDate = endDate;
      
    }
  }