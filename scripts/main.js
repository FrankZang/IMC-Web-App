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
		this.intro = document.querySelector('.intro');
		this.result_card = document.querySelector('.result-card');
		this.label = document.querySelectorAll('.intro__input-label');

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
        this.weightOut[0].innerHTML = `${dataTable[this.IMC.height].min} kg`;
        this.weightOut[1].innerHTML = `${dataTable[this.IMC.height].max} kg`;
        this.imcOut.innerHTML = this.IMC.value;
    }

    showCard () {
	    this.intro.classList.add('intro_out');
	    this.result_card.classList.add('result-card_visible');
	    this.eraseBtn.classList.add('erase_active');
	    this.originalState();
	}

	hideCard () {
	    this.result_card.classList.remove('result-card_visible');
	    this.intro.classList.remove('intro_out');
	    this.eraseBtn.classList.remove('erase_active');
	}

	originalState () {
		for (let i = 0; i < this.inputs.length; i++){
			this.inputs[i].value = '';
			this.label[i].classList.remove('intro__input-label_active');
		};
	}

};

new Calculator();

class inputState {
	constructor () {
		this.label = document.querySelectorAll('.intro__input-label');
		this.inputs = document.querySelectorAll('.intro__input');

		this.focusListeners = this.focusListeners.bind(this);

		Array.prototype.forEach.call(this.inputs, this.focusListeners);
	}

	focusListeners (e) {
		e.addEventListener('focus', this.focus);
	    e.addEventListener('blur', this.blur)
	}

	focus () {
		this.parentNode.children[0].classList.add('intro__input-label_active');
	    this.parentNode.children[0].style.color = '#0097a7'
	}

	blur () {
		if (!this.value) {
	        this.parentNode.children[0].classList.remove('intro__input-label_active');
	        this.parentNode.children[0].style.color = '#a3a3a3'
	    }
	    else {
	        this.parentNode.children[0].style.color = '#a3a3a3'
	    }
	}
};

new inputState();