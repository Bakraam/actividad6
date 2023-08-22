import { Component, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrUsers: User[] = [];
  usersService = inject(UsersService);


  ngOnInit() {
    this.usersService.getAll().subscribe((user) => {
      this.arrUsers = user.results;
    })
  }

  
}
