import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://jsonplaceholder.typicode.com';

  getPostsWithShare() {
    return this.getPosts().pipe(share());
  }

  getPosts() {
    return this.httpClient.get(
      `${'https://jsonplaceholder.typicode.com'}/posts`
    );
  }

  getComments() {
    return this.httpClient.get(
      `${'https://jsonplaceholder.typicode.com'}/comments`
    );
  }
}
