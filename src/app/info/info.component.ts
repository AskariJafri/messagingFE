import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public name: string ="";
  constructor(private router:Router){}
  onButtonClick(){
    console.log(this.name)
    this.router.navigate(["/chat-room"],{state:{msg:this.name}})
  }
}
