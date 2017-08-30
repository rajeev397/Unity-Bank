import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {

    url = "http://localhost:8890/register/register1";  

    constructor(private http:Http){
        console.log('Form Service Initialized');
    }

    private Formdata = {};
    private UserName ={};

    private data ={};
    setData1(option,value){
        this.UserName[option] = value;

    }
    setData(option, value) {
        this.Formdata[option] = value;
    }

getData1(){
    return this.UserName;
}
    

    getData() {
        return this.Formdata;
    }

    postData(Formdata){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        
        console.log(Formdata);
       // console.log(JSON.stringify(FormData));

        
        
        return this.http.post(this.url,Formdata,{headers : headers})
                   .map(res => res|| {result :'record added successfully'})
       

    }
}