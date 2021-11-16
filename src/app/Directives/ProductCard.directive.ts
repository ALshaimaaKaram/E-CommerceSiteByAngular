  import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective implements OnChanges {
  @Input('appProductCard') backgroungColorCard:string = "";
  constructor(private elem:ElementRef) {
    // elem.nativeElement.style = "box-shadow: 10px 5px 5px white;";
    // elem.nativeElement.style="border: orange 3px solid";
    this.elem.nativeElement.style = "box-shadow: 2px 2px 2px black; border: black 3px solid; border-radius: 25px"
  }
  ngOnChanges(): void {
    console.log(this.backgroungColorCard)
    this.elem.nativeElement.style = "background-color: " + this.backgroungColorCard + "; box-shadow: 5px 5px 5px black; border: black 3px solid; border-radius: 25px"
  }

  @HostListener('mouseover') OnMouseOver(){
    this.elem.nativeElement.style = "box-shadow: 5px 5px 5px black; border: black 3px solid; border-radius: 25px"
  }

  @HostListener('mouseout') OnMouseOut(){
    this.elem.nativeElement.style = "box-shadow: 2px 2px 2px black; border: black 3px solid; border-radius: 25px"
}
}
