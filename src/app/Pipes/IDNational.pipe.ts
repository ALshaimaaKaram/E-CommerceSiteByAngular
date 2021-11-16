import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'IDNational',
})
export class IDNationalPipe implements PipeTransform {
  BirthDate:string = "";
  BirthDay:string = "";
  BirthMonth:string = "";
  BirthYear:string = "";

  transform(IDNational: number, BirthdayFormat: string = "FullDate"):string{
    this.BirthDate = IDNational.toString().substring(1,7);
    console.log(this.BirthDate);
    this.BirthDay = this.BirthDate.substring(4,6);
    this.BirthMonth = this.BirthDate.substring(2,4);
    this.BirthYear = this.BirthDate.substring(0,2);
    this.BirthDate = this.BirthYear + " - " + this.BirthMonth + " - " + this.BirthDay;
    switch (BirthdayFormat) {
      case 'FullDate': console.log(this.BirthDate)
        return this.BirthDate;
        break;
      case 'MM': console.log(this.BirthMonth); return this.BirthMonth
        break;
      case 'YY': console.log(this.BirthMonth); return this.BirthMonth
        break;

      default: return "Not Valid"
        break;
    }
  }
}
