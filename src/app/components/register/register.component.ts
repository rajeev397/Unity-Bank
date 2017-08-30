import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
//import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from "app/components/register/register.service";

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
  // providers:[TaskService]
})
export class registercomponent {


  data: any = {};

  constructor(private router: Router, private formservice : FormService
  ){ }

getForm1($event) {

    event.preventDefault();
  var RegUser ={
      firstname     : this.data.firstname,
      middlename    : this.data.middlename,
      lastname      : this.data.lastname,
      suffix        : this.data.suffix,
      addressline1  : this.data.addressline1,
      addressline2  : this.data.addressline2,
      city          : this.data.city,
      state         : this.data.state,
      zipcode       : this.data.zipcode,
      phonenumber   : this.data.phonenumber,
      email         : this.data.email,
      ssn           : this.data.ssn,
      dob           : this.data.dob,
      mmn           : this.data.mmn,
      yesno         : this.data.yesno,
      employmentstatus: this.data.employmentstatus
  }
  this.formservice.setData1('username',RegUser.firstname);
  this.formservice.setData('firstname', RegUser.firstname);
    this.formservice.setData('middlename', RegUser.middlename);
    this.formservice.setData('lastname', RegUser.lastname);
    this.formservice.setData('suffix', RegUser.suffix);
    this.formservice.setData('addressline1', RegUser.addressline1);
    this.formservice.setData('addressline2', RegUser.addressline2);
    this.formservice.setData('city', RegUser.city);
    this.formservice.setData('state', RegUser.state);
    this.formservice.setData('zipcode', RegUser.zipcode);
    this.formservice.setData('phonenumber', RegUser.phonenumber);
    this.formservice.setData('email', RegUser.email);
    this.formservice.setData('ssn', RegUser.ssn);
    this.formservice.setData('dob', RegUser.dob);
    this.formservice.setData('mmn', RegUser.mmn);
    this.formservice.setData('yesno', RegUser.yesno);
    this.formservice.setData('employmentstatus',RegUser.employmentstatus);    
    console.log(RegUser)
    
    this.router.navigate(['register2']);

  }

  
}