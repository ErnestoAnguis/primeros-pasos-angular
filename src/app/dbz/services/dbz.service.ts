import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})

export class DbzService {

  public character:character[] = [{
    id: uuid(),
    name:"Krillin",
    power:500
  },
  {
    id: uuid(),
    name:"Goku",
    power:9500
  },
  {
    id: uuid(),
    name:"Gohan",
    power:1000
  }
  ];

  onNewCharacter(newCharacter:character):void{
    const addChar: character = { id:uuid(), name:newCharacter.name, power:newCharacter.power}

    console.log('Personaje añadido con la id ', addChar.id)
   this.character.push(addChar)
  }


  onDeleteById(id:string):void{
    console.log('Personaje eliminado con el id', id)
    this.character = this.character.filter(character => character.id != id)
  }
}
