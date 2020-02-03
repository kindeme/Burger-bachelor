// NAvigation function

(function(){
  
  const fixedNav = document.querySelector('.navbar');
// fixed navbar
window.addEventListener('scroll',function(){

  if(window.pageYOffset> 70){
    fixedNav.classList.add('fixed');
  }else{
    fixedNav.classList.remove('fixed');
  }
});
})();

// responsible navbar
(function(){
  const navBtn = document.querySelector('.nav-button');
  const navLinks = document.querySelector('.navlinks');
  navBtn.addEventListener('click',function(){  
    let value = navLinks.classList.contains('showNav');
    if(value){
      navLinks.classList.remove('showNav');
      navBtn.classList.remove('change');
    }
    else{
      navLinks.classList.add('showNav');
      navBtn.classList.add('change');
    }
  
  });

})();

//copyright date
const date = document.querySelector('#date');
 date.innerHTML = new Date().getFullYear();


