import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList:string[]  = ['Spiderman', 'IronMan','Hulk', 'Thor']
  public removedHero?:string;
     removeLastHero(){
      this.removedHero = this.heroesList.pop();
  }
}
