import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'penoc-sdk/services/api.service';

@Component({
  moduleId: module.id,
  selector: 'penoc-admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isAuthenticated = false;
  
      constructor(public router: Router, private apiService: ApiService) {
      }
  
      public authenticated() {
          this.isAuthenticated = true;
          setTimeout(function(router){
              router.navigate(['/events']);
          }, 0, this.router);
      }
  
      public signOutClicked(event: Event) {
          event.preventDefault();
          this.apiService.signOut();
          this.isAuthenticated = false;
          this.router.navigate(['']);
      }
  
      public homeClicked() {
          if (this.isAuthenticated){
              this.router.navigate(['/events']);
          } else {
              this.router.navigate(['']);
          }
      }
}
