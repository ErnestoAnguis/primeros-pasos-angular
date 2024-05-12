import { Component, Input, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacter:EventEmitter<character> = new EventEmitter();

  public newCharacter:character = {
    id:'',
    name:"",
    power: 0

  };


  public addCharacter(): void{
    //console.log(this.newCharacter);
    if(this.newCharacter.name.length === 0) return;

    this.onNewCharacter.emit({...this.newCharacter});
    // this.character.push(newCharacter)

    this.newCharacter.id = ''
    this.newCharacter.name = ''
    this.newCharacter.power = 0

  }
}
