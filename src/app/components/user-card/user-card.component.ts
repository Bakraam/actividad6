import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() miUser!: User | any;
    
  activatedRoute = inject(ActivatedRoute);
  usersService: UsersService = inject(UsersService);
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params:any)=>{
      let id = params.iduser;
    })
  }

  async deleteUser(_id:string): Promise<void> {
    alert ('Se va a eliminar este usuario. ¿Deseas continuar?')
    let response = await this.usersService.delete(_id);
    console.log(response);
    if (response) {
      alert ('El usuario ha sido eliminado correctamente')
    }
  }
}