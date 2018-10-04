import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'penoc-admin-modal-message-box',
    templateUrl: './modal-message-box.component.html',
    styleUrls: ['./modal-message-box.component.css']
})
export class ModalMessageBoxComponent {
    @Input() titleText: string;
    @Input() messageText: string;
    @Input() okButtonText: string;
    @Input() cancelButtonText: string;
    @Output() okClicked = new EventEmitter();
    @Output() cancelClicked= new EventEmitter();
    private visible: boolean = false;

    public display() {
        this.visible = true;
    }

    modalClicked(event:  MouseEvent) {
        if (event.srcElement.id === 'divModalBackground') {
            this.cancelButtonClicked();
        };
    }

    okButtonClicked() {
        this.okClicked.emit();
        this.visible = false;
    }

    cancelButtonClicked() {
        this.cancelClicked.emit();
        this.visible = false;
    }
}
