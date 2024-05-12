import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  public heroName:string = "SpiderMan";
  public heroAge:number = 20;
  public capitalName:string = this.heroName.toUpperCase();


  changeName(){
    this.heroName= "IronMan";
  }

  changeAge(){
    this.heroAge= 40;
  }

}
