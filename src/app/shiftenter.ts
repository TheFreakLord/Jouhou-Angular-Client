import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[shift-enter]'
})
export class ShiftEnterDirective {

  constructor(private el: ElementRef) {}

  @HostListener("keydown") onKeyDown(e) {
    console.log("lol");
    if(e.shiftKey && e.keyCode == 13) {
      e.preventDefault();
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
  }

}
