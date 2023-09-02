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
  private baseUrl2: string = "https://peticiones.online/api/users?page=2 "

  constructor() { }

  //Obtener todos los users
  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl)
  }

  //Obtener users page 2
  getAll2(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl2)
  }

  //Obtener user por su id
  getById(id: string) : Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(`${this.baseUrl}${id}`))  //id o _id
  }

  //Borrar user
  delete(id:string) : Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${id}`))  //id o _id
  }

  //Insertar nuevo user
  insert(formValue:any) : Promise<User> {
    return lastValueFrom(this.httpClient.post<User>(this.baseUrl,formValue))
  }
  
  //Actualizar user
  update(formValue:User): Promise <User>{
    return lastValueFrom(this.httpClient.put<User>(`${this.baseUrl}${formValue._id}`,formValue))
  }
}