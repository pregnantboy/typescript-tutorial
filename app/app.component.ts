import { Component } from 'angular2/core';

@Component({
  selector: 'pm-app',
  template:`
    <div><h1>{{PageTitle}}</h1>
      <div>My First Component</div>
    </div>
  `
})

export class AppComponent {
  PageTitle:String = 'Acme product managment';
}
