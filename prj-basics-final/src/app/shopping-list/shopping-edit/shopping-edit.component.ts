import { Component, OnInit ,ViewChild,ElementRef,EventEmitter,Output} from '@angular/core';
import  {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amointInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingNmae = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingNmae,ingAmount)
    this.ingredientAdded.emit(newIngredient);
    console.log(ingNmae)

  }
  onDelete(){
    // this.emtyArray=[];
  }

}
