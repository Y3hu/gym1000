import { Component, OnInit } from '@angular/core'
import { AdminService } from '../admin.service'
import { Router } from  "@angular/router"

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  
  private users: Array<any> = []

  constructor(private service: AdminService, public router: Router) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: any) => {
      this.users = []
      data.forEach(it => {
        this.users.push(it.payload.toJSON())
      })   
    })
  }


  removeUser($key){
    this.service.removeUser($key)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  goToRegisterPage(){
    this.router.navigate(['admin/register'])
  }

}
