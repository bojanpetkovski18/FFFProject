import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';

const HeaderOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  path: string = 'http://localhost:3000/Category';

  currentCategory: ICategory = {
    id: 0,
    Name: '',
  };

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this.path, HeaderOptions);
  }

  deleteCategory(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(this.path + '/' + id, HeaderOptions);
  }
}
