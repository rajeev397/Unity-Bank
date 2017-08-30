import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from './../../app.service';
import { FormService } from "app/components/register/register.service";


@Component({
  moduleId: module.id,
  selector: 'success',
  templateUrl: 'success.component.html'
  // providers:[TaskService]
})
export class successComponent {

 
data: any={};
Username : any ={};
 
constructor(private appService: AppService, private router :Router,private formService : FormService){
   this.Username =  this.formService.getData1();
}

   

}