import { Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService{
    constructor(private http: Http){
    console.log('app service initialized');
}
getApp(userid){
    return this.http.get('http://localhost:8890/register/login1?userid='+userid)
    .map(res => res.json());
}
getApp1(userid,password){
    return this.http.get('http://localhost:8890/register/login?userid='+userid+'&password='+password)
    
    .map(res => res.json());
}
}