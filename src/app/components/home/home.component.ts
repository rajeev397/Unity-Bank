import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from './../../app.service';

@Component({
  moduleId: module.id,
  selector: '',
  templateUrl: 'home.component.html'
  // providers:[TaskService]
})
export class HomeComponent {

 
data: any={};

getForm1($event) {

    event.preventDefault();
  var RegUser ={
      userid     : this.data.userid,
      password   : this.data.password
      
  }
  
  this.appService.getApp1(RegUser.userid,RegUser.password).subscribe(Det =>{
    console.log(Det);
    localStorage.setItem('Det',JSON.stringify(Det));
    this.router.navigate(['login'])
  })

}

 
constructor(private appService: AppService,private router :Router){}
}