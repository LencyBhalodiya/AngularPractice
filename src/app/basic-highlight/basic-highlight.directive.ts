import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    // private make sure you can access the value anywhere inside the classs
    constructor(private elementRef: ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}