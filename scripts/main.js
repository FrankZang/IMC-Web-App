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
		this.card = document.querySelectorAll('.floating-card')

		this.getValue = this.getValue.bind(this);
		this.comparator = this.comparator.bind(this);
		this.originalState = this.originalState.bind(this);
		this.animationend = this.animationend.bind(this);

		this.listeners();
	}

	listeners () {
		this.btn.addEventListener('click', this.getValue);
		this.eraseBtn.addEventListener('click', this.originalState);
		this.card[0].addEventListener("transitionend", this.animationend);

	}

	// removeListener () {
	// 	console.log("adjsaijd")
	// }

	animationend () {
		this.card[1].classList.add('card--visible');
		this.btn.classList.add('btn--off');
		this.eraseBtn.classList.remove('btn--off');
		this.card[0].removeEventListener('transitionend', this.animationend)
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

			this.card[0].classList.add('card--hidden');

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
	        
	    } else if (this.IMC.value < 25) {
	        indice.innerHTML = weightReference.ideal;
	        
	    } else if (this.IMC.value < 30) {
	        indice.innerHTML = weightReference.high;
	        
	    }
	     else if (this.IMC.value > 30) {
	        indice.innerHTML = weightReference.above;
	        
	    }

	    // this.showCard();
	}

	originalState () {
		this.card[0].classList.add('card--visible');
		this.card[1].classList.remove('card--visible');
		this.btn.classList.remove('btn--off');
		this.eraseBtn.classList.add('btn--off');
		
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
	    this.parentNode.children[0].style.color = 'rgba(53, 98, 112, 0.8)'
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

// new inputState();

// class Ripple {
//   constructor () {
//     this.btn = document.querySelectorAll('.material-button');
//     this.wave = document.createElement('div');
//     this.btnSize = Math.max(this.btn[0].clientHeight, this.btn[0].clientWidth);
    
//     this.onclick = this.onclick.bind(this);
    
//     this.evtListeners()
//   }
  
//   evtListeners () {
//     Array.prototype.forEach.call(this.btn, (e) => {
//       e.addEventListener('click', this.onclick)
//     })
//   }
  
//   onclick (e) {
//   	console.log(e.clientX - this.btnSize / 2 + "px")
//     this.wave.style.width = this.wave.style.height = this.btnSize + "px";
//     this.wave.style.left = e.clientX / 2 - this.btnSize - 6 + "px";
//     this.wave.style.top = e.clientY - (this.btnSize * 2) + 20 + "px";
//     e.currentTarget.appendChild(this.wave);
//     this.wave.classList.add('ripple-active');

//   }
// }

// new Ripple();

// document.addEventListener('click', e => {
// 	console.log(e.clientX)
// })