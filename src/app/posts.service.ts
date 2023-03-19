import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePast(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-http-371ef-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          //  observe: 'body' // its by default
          observe: 'response' //gives every info inc. headers
        }
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-http-371ef-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'custom-Header': 'Its me' }),//to add custom header
          params: searchParams
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          console.log(responseData);

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-http-371ef-default-rtdb.firebaseio.com/posts.json',{
        observe: 'events',
        responseType:'text' //change response type default is json
      }
    ).pipe(tap(event=>{
       console.log(event);
       if(event.type === HttpEventType.Sent){
        console.log("Request Sent");
        
       }
       if(event.type === HttpEventType.Response){
        console.log(event.body);
        
       }
             
    }))
  }
}
