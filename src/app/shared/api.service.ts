import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentDashModel } from '../studentdash/studentdash.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

// handle API errors
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
  }

  postStudent(data: any) {
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any) =>{
      return res;
    }))
  }

  getStudent(){
    return this.http.get<any>('http://localhost:3000/posts').pipe(map((res:any) =>{
      return res;
    }))
  }

  updateStudent(data: any, id:string) {
    return this.http.put<any>('http://localhost:3000/posts/'+id, data).pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteStudent(id:string){
    return this.http.delete<any>('http://localhost:3000/posts/'+id).pipe(map((res:any) =>{
      return res;
    }))
  }
  }

function getStudent() {
  throw new Error('Function not implemented.');
}

function retry(arg0: number): import("rxjs").OperatorFunction<StudentDashModel, unknown> {
  throw new Error('Function not implemented.');
}

function catchError(handleError: (error: HttpErrorResponse) => Observable<never>): import("rxjs").OperatorFunction<unknown, StudentDashModel> {
  throw new Error('Function not implemented.');
}


