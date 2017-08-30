import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from "app/components/register/register.service";



@Component({
  moduleId: module.id,
  selector: 'register3',
  templateUrl: 'register3.component.html'
  // providers:[TaskService]
})
export class register3component {
private Formdata={};
 
data: any={};
 
constructor(private router :Router, private formservice : FormService){}


 getForm1($event){
     event.preventDefault();
    
     var RegUser3 = {
       userid:this.data.userid,
       password:this.data.password,
       password1:this.data.password1,
       security:this.data.security
       }
 
  
  console.log(RegUser3)

  if(RegUser3.password == RegUser3.password1){
    this.formservice.setData('userid', RegUser3.userid);
  this.formservice.setData('password', RegUser3.password);
  this.formservice.setData('security',RegUser3.security);
  this.router.navigate(['register4']);
}
else{
  alert('Password and confirm Password not matched')
}
   
 }
 
}
