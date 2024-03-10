const menubar = document.querySelector('.menubar');
const ul = document.querySelector('ul')
const header  = document.querySelector('header')


let a = 1;
menubar.addEventListener('click', function() {
  menubar.classList.toggle('active');
  if(a === 1){
      ul.style.left = "0%"
       a = 2  
    }
    else{
     
        ul.style.left = "-100%"
        a = 1
        
    }
});