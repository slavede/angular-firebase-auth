import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class BlogService {

  constructor(private http: Http, private authService: AuthService) { }

  getBlogs() {
    const token = this.authService.getToken();

    return this.http.get('https://fir-project-1-cbefe.firebaseio.com/blogs.json?auth=' + token).subscribe((data) => {
      console.log('Got data');
      console.log(data);
    }, (error) => {
      console.log('Got error');
      console.log(error);
    });
  }

}
