import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DatabaseReference } from '@angular/fire/database/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private userList: AngularFireList<any>

  private userRef: DatabaseReference

  constructor(private db: AngularFireDatabase) { }

  getUsers(): Observable<any> {
    this.userList = this.db.list('Users')
    this.userRef = this.db.database.ref('Users')

    return this.userList.snapshotChanges()
  }

  createUser(user){
    
    return this.userRef.child(user.id).set(user);
  }

  updateUser({$key, ...user}){
    return this.userList.update(`${$key}`, user);
  }

  removeUser($key){
    return this.userList.remove($key)
  }

}
