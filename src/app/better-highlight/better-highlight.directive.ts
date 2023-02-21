import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor: string = 'transparent';
@Input() highlightColor: string = 'blue';

@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
  }
  ngOnInit(){
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color','lightblue')
  }

  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','lightblue') //doesn't rquire since we are using hostbinding 
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.backgroundColor = this.defaultColor;
  }
}
