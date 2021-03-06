import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiService } from 'penoc-sdk/services/api.service';

@Component({
  moduleId: module.id,
  selector: 'penoc-admin-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
    private authenticationFailed = false;
    private authenticating = false;
    @Output() public authenticated: EventEmitter<any> = new EventEmitter;
    @ViewChild('userName') userName: any;

    public constructor(public apiService: ApiService) {

    }

    ngAfterViewInit() {
        this.userName.nativeElement.focus();
    }

    private signIn(userName: string, password: string) {
    this.authenticationFailed = false;
    this.authenticating = true;
            this.apiService.signIn(userName, password).subscribe(authenticated => {
                if (authenticated) {
                    this.authenticated.emit(true);
                    this.authenticating = false;
                }else{
                this.authenticationFailed = true;
                this.authenticating = false;
                }
            });
    }

    public signInClicked(userName: string, password: string) {
       this.signIn(userName, password);
    }

    public passwordKeyPressed(event: any, userName: string, password: string){
        switch (event.key) {
            case 'Enter': this.signIn(userName, password);
        }
    }

}

