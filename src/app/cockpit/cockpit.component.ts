import { Component ,ElementRef,EventEmitter, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None , native available
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;

  onAddServer(nameInput:HTMLInputElement) {
   this.serverCreated.emit({
    serverName:nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value
   })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
