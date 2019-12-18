import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service.service';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private users: Array<any> = []
  private days: Array<any> = []
  
  selectedDay: any

  user: any

  constructor(public  authService:  AuthService, private service: AdminService) { }

  ngOnInit() {

    this.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    
    this.service.getUsers().subscribe((data: any) => {
      this.users = []
      data.forEach(it => {
        this.users.push(it.payload.toJSON())
      });   
    })

  }

  createUser(name: string, lastName: string, size: string, weight: string, email: string, password: string){
    let date = new Date()

    this.service.createUser({
      id: date.toString(),
      name,
      lastName,
      size,
      weight,
      email,
      password,
      day: this.selectedDay,
      notificated: false
    })
    .then(res => {
      console.log(res)

      this.authService.register(email, password)
    })
    .catch(err => console.log(err))
  }

}
