import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
REST_API:string="http://localhost:8000/api"
httpHeaders=new HttpHeaders().set('Content-Type','application/json');


  constructor(private Http_clint:HttpClient) { }

  AddBook(data:Book):Observable<any>{
    let API_URL=`${this.REST_API}/add-book`;
    return this.Http_clint.post(API_URL,data).pipe(catchError(this.handleError))
  }

  GetAllBooks(){
    return this.Http_clint.get(`${this.REST_API}`);
  }

GetBookById(id:any):Observable<any>{
  let API_URL=`${this.REST_API}/update-book/${id}`;
  return this.Http_clint.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
    return res || {}
  }),
  catchError(this.handleError))
}

UpdateBook(id:any,data: any):Observable<any>{
  let API_URL=`${this.REST_API}/update-book/${id}`;
  return this.Http_clint.put(API_URL,data,{headers:this.httpHeaders}).pipe(
  catchError(this.handleError)
  )
}

DeleteBook(id:any):Observable<any>{
  let API_URL=`${this.REST_API}/delete-book/${id}`;
  return this.Http_clint.delete(API_URL,{headers:this.httpHeaders}).pipe(
  catchError(this.handleError)
  )
}

handleError(error: HttpErrorResponse){
  let errormsg='';
  if(error.error instanceof ErrorEvent){
    errormsg=error.error.message;
  }else{
    errormsg=`Error code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errormsg);
  return throwError(errormsg);
}
}
