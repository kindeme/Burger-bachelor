// NAvigation function

(function(){
  // fixed navbar
  const fixedNav = document.querySelector('.navbar');
  const navBtn =document.querySelector('.nav-button');
  const navLinks =document.querySelector('.navlinks');

window.addEventListener('scroll',function(){

  if(window.pageYOffset> 70){
    fixedNav.classList.add('fixed');
  }else{
    fixedNav.classList.remove('fixed');
  }
});
 
})();