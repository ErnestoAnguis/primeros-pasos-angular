import { Component, Input, Output, EventEmitter} from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public character:character[]=[];

@Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

public index:number=0;

public onDeleteCharacter(idEliminar:string):void{

  if (!idEliminar){return}

  console.log("Valor del id", idEliminar)
  this.onDelete.emit(idEliminar);

}
}
