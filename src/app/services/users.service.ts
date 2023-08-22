import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient)
  private baseUrl: string = "https://peticiones.online/api/users/";

  constructor() { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl)
  }

  
  getById(id: string) : Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(`${this.baseUrl}${id}`))
  }

}
