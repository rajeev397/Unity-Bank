import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from "app/components/register/register.service";

@Component({
  moduleId: module.id,
  selector: 'register2',
  templateUrl: 'register2.component.html'
  // providers:[TaskService]
})
export class register2component {

 
data: any={};
 
constructor(private router :Router, private formservice : FormService){}

 getForm1($event) {
    event.preventDefault();
  var RegUser1 ={

  depositamount : this.data.depositamount
}
 this.formservice.setData('depositamount', RegUser1.depositamount);
  this.router.navigate(['register3']);
 console.log(RegUser1)
    
   

}
}