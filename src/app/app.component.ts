import { Component, OnInit } from '@angular/core'
import { AdminService } from './admin/admin.service'
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'gym1000'
  private users: Array<any> = []

  constructor(private service: AdminService) { }

  ngOnInit(){
    this.service.getUsers().subscribe( (data: any) => {
      this.users = []
      data.forEach(it => {
        this.users.push(it.payload.toJSON())
        this.sendEmail(it.payload.toJSON())
      })
    })
  }

  sendEmail(user){
    let d = new Date()
    let day = d.getDate()
    
    if(day == Number(user.day) && user.email != 'milton5588@hotmail.com' && !user.notificated) {
      axios.get(`https://us-central1-gym1000-b0dd5.cloudfunctions.net/sendMail/<${user.email}>`)
      .then(res => {
        this.updateUser(user)
      })
      .catch(err => console.log(err))
    }

  }

  updateUser(user){
    let $key = user.id
    user.notificated = true
    
    this.service.updateUser({$key, ...user})
  }

}
