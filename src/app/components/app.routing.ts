import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registercomponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { register3component } from './register3/register3.component';
import { register2component } from './register2/register2.component';
import { register4component } from './register4/register4.component';
import {passwordComponent} from  './password/password.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { successComponent } from './success/success.component';
import {FlashComponent} from  './flash/flash.component';
import {addmoneyComponent} from './addmoney/addmoney.component';
import {withdrawnComponent} from './withdrawn/withdrawn.component';
import {transferComponent} from './transfer/transfer.component';


const routes: Routes = [
  {path: 'register', component: registercomponent},
  {path: '', component: HomeComponent},
  {path: 'register3', component: register3component},
  {path: 'register2', component: register2component},
  {path: 'register4',component: register4component},
  {path :'flash', component : ForgotComponent },
  {path: 'forgot',component: ForgotComponent},
  {path: 'addmoney', component:addmoneyComponent},
  {path: 'withdrawn', component:withdrawnComponent},
  {path: 'transfer', component:transferComponent},
  {path: 'success', component: successComponent},
  {path: 'password', component: passwordComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
