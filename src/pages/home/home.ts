import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	singleValue: any;
	indicator: any;

	constructor(public navCtrl: NavController) {
		
		
		
	}

	 ngAfterViewInit() 
  {
	  this.indicator = document.getElementById("indicator");
	  console.log(this.indicator);
  }
	onClickSegment() {

	}

	onSlideChanged() {

	}
	changeWillSlide() {

	}
	onChangeSlider() {
		console.log(this.singleValue);
		var transform = this.singleValue * ((375.0-(375.0/3)) / (375.0/3))
		console.log(transform);
		
		this.indicator.style.webkitTransform = 'translate3d(' + (transform) + '%,0,0)';
		// this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';

	}
}
