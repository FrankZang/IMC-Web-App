'use strict';

class Calculator {

	constructor () {

		this.IMC = {};

		this.inputs = document.querySelectorAll('.intro__input');
		this.btn = document.querySelector('#btn');
		this.weightOut = document.querySelectorAll('.weight');
		this.imcOut = document.querySelector('#imc');
		this.indice = document.querySelector('#indice');
		this.eraseBtn = document.querySelector('.erase');
		this.label = document.querySelectorAll('.intro__input-label');
		this.card = document.querySelectorAll('.floating-card')

		this.getValue = this.getValue.bind(this);
		this.comparator = this.comparator.bind(this);
		this.originalState = this.originalState.bind(this);
		this.fill = this.fill.bind(this);

		this.listeners();

	}

	listeners () {
		this.btn.addEventListener('click', this.getValue);
		this.eraseBtn.addEventListener('click', this.originalState);
	}

	getValue () {
	    let weight = this.inputs[0].value;
	    let height = this.inputs[1].value;

	    if (weight != 0 && height != 0) {
		    if (height <= 2) {
		        this.IMC.height = height * 100;
		    } else {
		        height = height / 100;
		        this.IMC.height = height * 100;
		    }

	    if (this.IMC.height % 2 != 0) {
	    	this.IMC.height = this.IMC.height -1;
	    }


		if (typeof(dataTable[this.IMC.height]) != 'undefined') {

			setTimeout(()=>{
				this.card[0].classList.remove('card--visible');
				this.card[0].classList.add('card--hidden');
				this.btn.classList.add('btn--off');

			}, 200)

			setTimeout(()=>{
				this.card[1].classList.add('card--visible');
				this.eraseBtn.classList.remove('btn--off');
			}, 500)

			    let result = weight / (height * height);

				this.IMC.value = result.toFixed(1);
					
			    this.comparator()

		}
		else {
			console.log("callback")
		}

	    }
	}

	comparator () {

	    if (this.IMC.value < 18.5) {
	        indice.innerHTML = weightReference.down;
			this.fill()
	        
	    } else if (this.IMC.value < 25) {
			indice.innerHTML = weightReference.ideal;
			this.fill()
	        
	    } else if (this.IMC.value < 30) {
	        indice.innerHTML = weightReference.high;
			this.fill()
	        
	    }
	     else if (this.IMC.value > 30) {
	        indice.innerHTML = weightReference.above;
			this.fill()
	        
	    }
	}

	fill () {
		this.imcOut.innerHTML = this.IMC.value;
		this.weightOut[0].innerHTML = dataTable[this.IMC.height].min;
		this.weightOut[1].innerHTML = dataTable[this.IMC.height].max;

	}

	originalState () {

		setTimeout(()=>{
			this.card[0].classList.remove('card--hidden');
			this.card[0].classList.add('card--visible');
		this.btn.classList.remove('btn--off');

		}, 500)

		setTimeout(()=>{
		this.card[1].classList.remove('card--visible');
		this.eraseBtn.classList.add('btn--off');
		}, 200)
	
	}

};

new Calculator();