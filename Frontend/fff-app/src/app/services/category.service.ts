import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
path:string = environment.apiUrl + 'api/Categories'

constructor(private http:HttpClient) {}

create(data: any): Observable<ICategory> {
  return this.http.post<ICategory>(this.path, data);
}
}
