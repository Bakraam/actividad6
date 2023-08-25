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

  //Obtener todos los users
  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl)
  }

  //Obtener user por su id
  getById(id: string) : Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(`${this.baseUrl}${id}`))
  }

  //Borrar user
  delete(id:string) : Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${id}`))
  }

  //Insertar nuevo user
  /*
  newUser(formValue:any) : Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}${id}`))
  }
  */

  //Actualizar user

}
