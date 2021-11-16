import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  creditCard:string = "";
  creditCardString:string = "";

  transform(creditCardNum: number): string {
    this.creditCardString = creditCardNum.toString();

    this.creditCard = this.creditCardString.substring(0,4);
    console.log(this.creditCard);

    for (let i = 5; i < 16; i+4) {
      this.creditCard += " - " + this.creditCardString.substring(i,i+4);
      console.log(this.creditCard);
      console.log(i);
    }
    return this.creditCard;
  }
}
