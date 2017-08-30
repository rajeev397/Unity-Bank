import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from './../../app.service';

@Component({
  moduleId: module.id,
  selector: 'forgot',
  templateUrl: 'forgot.component.html'
  // providers:[TaskService]
})
export class ForgotComponent {

 
data:any = { };

getForm1($event) {

    event.preventDefault();
  var RegUser ={
      userid     : this.data.userid,
      
  }

  this.appService.getApp(RegUser.userid).subscribe(Details =>{
    console.log(Details);
    localStorage.setItem('Details',JSON.stringify(Details));
    this.router.navigate(['password'])
  })
}
 
constructor(private appService: AppService, private router :Router){}
 
}