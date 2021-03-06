import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'penoc-admin-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent  {
  @Input() title: string;
  @Input() nextText: string = 'Next >';
  @Input() newText: string = 'New';
  @Input() editing: boolean = false;
  @Input() buttons: string[] = [];
  @Input() valid: boolean = true;

  @Output() backClicked = new EventEmitter;
  @Output() nextClicked = new EventEmitter;
  @Output() newClicked = new EventEmitter;
  @Output() saveClicked = new EventEmitter;
  @Output() cancelClicked = new EventEmitter;

  constructor() { }

  public backRequest() {
    this.backClicked.emit({});
  }

  public nextRequest() {
      this.nextClicked.emit({});
  }

  public saveRequest(event: Event) {
      event.stopPropagation();
      this.saveClicked.emit({});
  }

  public cancelRequest(event: Event) {
      event.stopPropagation();
      this.cancelClicked.emit({});
  }

  public newRequest() {
      this.newClicked.emit({});
  }

}
