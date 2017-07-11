import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.authService.init();
  }

  login() {
    this.authService
      .login('slaven.tomac@amphinicy.com', 'slaven.tomac')
      .then((successResponse) => {
        console.log('Success logging in. Redirect to main page');
      }, (errorResponse) => {
        console.error('Error while logging in (show notification to user here)');
      });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getData() {
    this.blogService.getBlogs();
  }
}
