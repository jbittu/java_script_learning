const bt1 = document.querySelector('#btn1');
const bt2 = document.querySelector('#btn2');
const bt3 = document.querySelector('#btn3');
const bt4 = document.querySelector('#btn4');
const conr = document.querySelector('.container');
const para = document.querySelector('p');

conr.addEventListener('click', (e) =>{
    if (e.target.tagName === 'BUTTON'){
        console.log(e.target.innerText);
    }
    if(e.target.tagName === 'P'){
        console.log('P tag');
    }
});