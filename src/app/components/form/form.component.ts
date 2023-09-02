import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    
  userForm: FormGroup
  usersService = inject(UsersService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor(){
    this.userForm = new FormGroup({
      first_name: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl("",[
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
      ]),
      username: new FormControl("",[
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(8)
      ])
      
    },[]);
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(async(params:any)=>{
      let _id: string = String(params.iduser);
      
      if(_id != undefined){
        let response = await this.usersService.getById(_id)
        this.userForm = new FormGroup({
          _id: new FormControl(response._id,[]),
          id: new FormControl(response.id,[]),
          first_name: new FormControl(response.first_name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          last_name: new FormControl(response.last_name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          email: new FormControl(response.email,[
            Validators.required,
            Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
          ]),
          username: new FormControl(response.username,[
            Validators.required,
            Validators.minLength(6)
          ]),
          image: new FormControl(response.image,[]),
          password: new FormControl(response.password,[
            Validators.required,
            Validators.minLength(8)
          ])
        },[])
      }
      
    })
  }

  async getDataForm(): Promise<void>{
    if(this.userForm.value._id){
      //actualizando
      let response = await this.usersService.update(this.userForm.value)
      console.log(response);
      if (response._id){
        alert('Usuario actualizado correctamente')
        this.router.navigate(['/home']);
      }else{
        alert('Error al actualizar');
      }
    }else{
      //insertando
      let response = await this.usersService.insert(this.userForm.value);
      console.log(response)
      if(response.id){
        alert('Usuario insertado correctamente')
        this.router.navigate(['/home']);
      }else{
        alert('Ha habido un error, inténtalo de nuevo')
      }
    }    
  }

  checkControl(formcontrolName:string, validator:string): boolean|undefined{
    return this.userForm.get(formcontrolName)?.hasError(validator) && this.userForm.get(formcontrolName)?.touched
  }
}