let IMC={};const inputs=document.querySelectorAll('.input');const indice=document.querySelector('#indice');const weightOut=document.querySelectorAll('.weight');const IMCOut=document.querySelector('#imc');const IMCBtn=document.querySelector('#btn');const eraseBtn=document.querySelector('.erase');const intro=document.querySelector('.intro');const result_card=document.querySelector('.result-card');function getValue(){let weight=inputs[0].value;let height=inputs[1].value;if(weight!=0&&height!=0){IMCCalculator(weight,height);}};function IMCCalculator(weight,height){if(height<=2.0){height=height||height.replace(".",",");IMC.height=height*100;}
else{height=height / 100;IMC.height=height*100;}
imc=weight /(height*height);IMC.value=imc.toString().substring(0,4)
comparator()};function comparator(){if(IMC.height%2!==0){IMC.height=IMC.height-1;}
function fill(){weightOut[0].innerHTML=dataTable[`${IMC.height}`].min+' kg';weightOut[1].innerHTML=dataTable[`${IMC.height}`].max+' kg';IMCOut.innerHTML=IMC.value;}
if(IMC.value<18){indice.innerHTML=weightReference.down;fill();}
else if(IMC.value<24){indice.innerHTML=weightReference.ideal;fill();}
else if(IMC.value<29){indice.innerHTML=weightReference.ideal;fill();}
else if(IMC.value<34){indice.innerHTML=weightReference.above;fill();}
else if(IMC.value<39){indice.innerHTML=weightReference.above;fill();}
else if(IMC.value>40){indice.innerHTML=weightReference.above;fill();}
showCard()};function showCard(){intro.classList.add('intro__out');result_card.classList.add('result-card__visible');eraseBtn.classList.add('erase__active');originalState();};function eraseData(){result_card.classList.remove('result-card__visible');intro.classList.remove('intro__out');eraseBtn.classList.remove('erase__active');}
function originalState(){inputs[0].value='';inputs[1].value='';IMCBtn.classList.remove('imc-btn__active');label[0].classList.remove('input-label__active');label[1].classList.remove('input-label__active');}
IMCBtn.addEventListener('click',getValue);document.querySelector('#clear').addEventListener('click',eraseData);const label=document.querySelectorAll('.input-label');function focus(){this.parentNode.children[0].classList.add('input-label__active');}
function blur(){if(this.value==0){this.parentNode.children[0].classList.remove('input-label__active');}}
Array.prototype.forEach.call(inputs,focusChange);function focusChange(e){e.addEventListener('focus',focus);e.addEventListener('blur',blur)}