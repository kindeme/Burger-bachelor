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
const copydate = document.querySelector('#date');
 copydate.innerHTML = new Date().getFullYear();

})();

// responsible navbar
(function(){
  const navBtn = document.querySelector('.nav-button');
  const navLinks = document.querySelector('.navlinks'); 
  const scrollLinks = documment.querySelectorAll('.scroll-link');
console.log(scrollLinks)


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

 

  // links on little screen
  scrollLinks.forEach(function(link){

   link.addEventListener("click",function(e){
     e.preventDefault();
     if(innerWidth < 500){
       navLinks.classList.remove('navlinks')
     }else{
      navLinks.classList.add('navlinks')
     }

   });

 });

})();

//copyright date



