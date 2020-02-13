import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Tweet} from '../models/tweet';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
})
export class ApiService {
base_path= 'https://route1d6e5udv-dzwibo-che.8a09.starter-us-east-2.openshiftapps.com';

  constructor(private http :HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
    // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  listTweets():Observable<any> {
    return this.http.get(this.base_path)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  // Get single student data by ID
  getItem(id): Observable<Tweet> {
    return this.http
      .get<Tweet>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}