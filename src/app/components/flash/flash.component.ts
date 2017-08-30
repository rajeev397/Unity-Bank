import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
 
@Component({
    template: `
        <p>password and confirm password not matched</p>
    `
})
export class FlashComponent implements OnInit {
    constructor(private _flashMessagesService: FlashMessagesService) {}
 
    ngOnInit() {
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
        this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
    }
}