'use strict';

class Calculator {

	constructor () {

		this.IMC = {};

		this.inputs = document.querySelectorAll('.input');
		this.btn = document.querySelector('#btn');
		this.weightOut = document.querySelectorAll('.weight');
		this.imcOut = document.querySelector('#imc');
		this.indice = document.querySelector('#indice');
		this.eraseBtn = document.querySelector('.erase');
		this.intro = document.querySelector('.intro');
		this.result_card = document.querySelector('.result-card');
		this.label = document.querySelectorAll('.input-label');

		this.getValue = this.getValue.bind(this);
		this.comparator = this.comparator.bind(this);
		this.hideCard = this.hideCard.bind(this);
		this.originalState = this.originalState.bind(this);

		this.listeners();
	}

	listeners () {
		this.btn.addEventListener('click', this.getValue);
		this.eraseBtn.addEventListener('click', this.hideCard)
	}

	getValue () {
	    let weight = this.inputs[0].value;
	    let height = this.inputs[1].value;

	    if (weight != 0 && height != 0) {
		    if (height <= 2.0) {
		        height = height;
		        this.IMC.height = height * 100;
		    } else {
		        height = height / 100;
		        this.IMC.height = height * 100;
		    }

	    if (this.IMC.height % 2 != 0) {
	    	this.IMC.height = this.IMC.height - 1;
	    }

		    let result = weight / (height * height);

		    this.IMC.value = result.toString().substring(0, 4)

		    this.comparator()
	    }
	}

	comparator () {

	    if (this.IMC.height % 2 !== 0) {
	        this.IMC.height = this.IMC.height - 1;
	    }
	    if (this.IMC.value < 18.5) {
	        indice.innerHTML = weightReference.down;
	        this.fill();
	    } else if (this.IMC.value < 25) {
	        indice.innerHTML = weightReference.ideal;
	        this.fill();
	    } else if (this.IMC.value < 30) {
	        indice.innerHTML = weightReference.high;
	        this.fill();
	    }
	     else if (this.IMC.value > 30) {
	        indice.innerHTML = weightReference.above;
	        this.fill();
	    }

	    this.showCard();
	}

    fill () {
        this.weightOut[0].innerHTML = dataTable[`${this.IMC.height}`].min + ' kg';
        this.weightOut[1].innerHTML = dataTable[`${this.IMC.height}`].max + ' kg';
        this.imcOut.innerHTML = this.IMC.value;
    }

    showCard () {
	    this.intro.classList.add('intro__out');
	    this.result_card.classList.add('result-card__visible');
	    this.eraseBtn.classList.add('erase__active');
	    this.originalState();
	}

	hideCard () {
	    this.result_card.classList.remove('result-card__visible');
	    this.intro.classList.remove('intro__out');
	    this.eraseBtn.classList.remove('erase__active');
	}

	originalState () {

		for (let i = 0; i < this.inputs.length; i++){
			this.inputs[i].value = '';
			this.label[i].classList.remove('input-label__active');
		};
}

};

new Calculator();

class inputState {
	constructor () {
		this.label = document.querySelectorAll('.input-label');
		this.inputs = document.querySelectorAll('.input');

		this.focusListeners = this.focusListeners.bind(this);

		Array.prototype.forEach.call(this.inputs, this.focusListeners);
	}

	focusListeners (e) {
		e.addEventListener('focus', this.focus);
	    e.addEventListener('blur', this.blur)
	}

	focus (e) {
		this.parentNode.children[0].classList.add('input-label__active');
	    this.parentNode.children[0].style.color = '#0097a7'
	}

	blur (e) {
		if (this.value == 0) {
	        this.parentNode.children[0].classList.remove('input-label__active');
	        this.parentNode.children[0].style.color = 'rgba(0,0,0, .5)'
	    }
	    else {
	        this.parentNode.children[0].style.color = 'rgba(0,0,0, .5)'
	    }
	}
};

new inputState();