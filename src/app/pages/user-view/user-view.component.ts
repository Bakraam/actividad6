import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  
  activatedRoute = inject(ActivatedRoute);
  oneUser!: User | any;
  usersService = inject(UsersService);
  router = inject(Router)

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params:any)=>{
      let id = params.iduser;
      this.oneUser = await this. usersService.getById(id);
    })
  }

  async deleteUser(_id:string): Promise<void> {
    alert ('Se va a eliminar este usuario. ¿Deseas continuar?')
    let response = await this.usersService.delete(_id);
    console.log(response);
    if (response) {
      alert ('El usuario ha sido eliminado correctamente')
      this.router.navigate(['/home'])
    }

  }

}
