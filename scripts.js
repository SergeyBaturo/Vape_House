const popupCall1 = document.getElementById('popup-call1');
const popupCall2 = document.getElementById('popup-call2');
const popupCall3 = document.getElementById('popup-call3');
const popupCall4 = document.getElementById('popup-call4');
const popupCall5 = document.getElementById('popup-call5');
const popupCall6 = document.getElementById('popup-call6');
const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');
const popup6 = document.getElementById('popup6');
const popupClose1 = document.getElementById('popup-close1');
const popupClose2 = document.getElementById('popup-close2');
const popupClose3 = document.getElementById('popup-close3');
const popupClose4 = document.getElementById('popup-close4');
const popupClose5 = document.getElementById('popup-close5');
const popupClose6 = document.getElementById('popup-close6');

popupCall1.onclick = function() {
  popup1.classList.add('opened');
}

popupCall2.addEventListener('click', () => {
  popup2.classList.add('opened');
})

popupCall3.addEventListener('click', () => {
  popup3.classList.add('opened');
})

popupCall4.addEventListener('click', () => {
  popup4.classList.add('opened');
})

popupCall5.addEventListener('click', () => {
  popup5.classList.add('opened');
})

popupCall6.addEventListener('click', () => {
  popup6.classList.add('opened');
})

popupClose1.onclick = function() {
  popup1.classList.remove('opened');
}

popupClose2.addEventListener('click', () => {
  popup2.classList.remove('opened');
})

popupClose3.addEventListener('click', () => {
  popup3.classList.remove('opened');
})

popupClose4.addEventListener('click', () => {
  popup4.classList.remove('opened');
})

popupClose5.addEventListener('click', () => {
  popup5.classList.remove('opened');
})

popupClose6.addEventListener('click', () => {
  popup6.classList.remove('opened');
})