import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: []
})
export class HeroCardComponent implements OnInit {

  ngOnInit() {
  }
  
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(private _router:Router) {
  	this.selectedHeroe = new EventEmitter;
   }

    verHeroe(){
    	this._router.navigate(["/heroe", this.index]);
 	    //this.selectedHeroe.emit(this.index)
 	}

}
