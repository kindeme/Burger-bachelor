// NAvigation function

(function(){
  // fixed navbar
  const fixedNav = document.querySelector('.navbar');

window.addEventListener('scroll',function(){

  if(window.pageYOffset> 84){
    fixedNav.classList.add('fixed');

  }else{
    fixedNav.classList.remove('fixed');
  }
});
 


})();