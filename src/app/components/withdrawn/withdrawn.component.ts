import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from './../../app.service'

@Component({
  moduleId: module.id,
  selector: 'withdrawn',
  templateUrl: 'withdrawn.component.html'
  // providers:[TaskService]
})
export class withdrawnComponent {

 
data: any={};
constructor(private appService: AppService, private router :Router){
   this.data= JSON.parse(localStorage.getItem('Det'))
}

}