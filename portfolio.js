Scl=document.querySelector('#scl');
Sn=document.querySelector('#sn');

Scl.addEventListener('onclick',on);
 function on(e){
    e.preventDefault();
    console.log(Sn.value);
 }ss
 rm=document.querySelector('#san')
 rm.addEventListener('click',(e)=>{
   h2.classList.toggle('show-more');
 })
 anime({
  targets: 'div.box.b1',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',

  }

 });