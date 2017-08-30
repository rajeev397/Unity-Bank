import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {registercomponent} from  './components/register/register.component';
import {register3component} from  './components/register3/register3.component';
import {register4component} from  './components/register4/register4.component';
import {register2component} from  './components/register2/register2.component';
import {ForgotComponent} from  './components/forgot/forgot.component';
import {passwordComponent} from  './components/password/password.component';
import {LoginComponent} from  './components/login/login.component';
import {FlashComponent} from  './components/flash/flash.component';
import {successComponent} from  './components/success/success.component';
import {AppRoutingModule} from './components/app.routing';
import { HomeComponent } from './components/home/home.component';
import { FormService } from "app/components/register/register.service";
import { FlashMessagesModule } from 'angular2-flash-messages';
import {addmoneyComponent} from './components/addmoney/addmoney.component';
import {withdrawnComponent} from './components/withdrawn/withdrawn.component';
import {transferComponent} from './components/transfer/transfer.component';


@NgModule({
  declarations: [
    AppComponent,registercomponent,HomeComponent,register3component,register2component,register4component,FlashComponent, ForgotComponent,
    successComponent, passwordComponent, LoginComponent, addmoneyComponent, withdrawnComponent, transferComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule, HttpModule, FlashMessagesModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
