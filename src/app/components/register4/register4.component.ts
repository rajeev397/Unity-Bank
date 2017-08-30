import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from "app/components/register/register.service"; 

@Component({
  moduleId: module.id,
  selector: 'register4',
  templateUrl: 'register4.component.html'
  // providers:[TaskService]
})
export class register4component {
private Formdata ={};
 
data: any={};
 
constructor(private router :Router,private formservice: FormService){}
getForm1($event){
   event.preventDefault();
 
  var RegUser4={

    checkbox : this.data.checkbox
  }

  if(RegUser4.checkbox == true){
this.formservice.setData('checkbox',RegUser4.checkbox);
this.Formdata=this.formservice.getData();




this.formservice.postData(this.Formdata)
               .subscribe(result =>{
                 console.log(result);
               },
               error => {
                 alert('there is a problem');
               }
               )

this.router.navigate(['success']);
  }
  else{
    {
  alert('please agree to the terms & conditions')
}
  }
}



                   



}