const currentUrl = document.baseURI;
const links =document.querySelectorAll('.link');
links.forEach(menu =>{
  if(currentUrl === menu.href){
    menu.classList.add('active');
  }
});

(function(){

  const fixedNav = document.querySelector('.navbar');
  const copydate = document.querySelector('#date');
  const navBtn = document.querySelector('.nav-button');
   const navLinks = document.querySelector('.navlinks'); 
 // Fixed nav on scroll
window.addEventListener('scroll',function(){

  if(window.pageYOffset> 70){
    fixedNav.classList.add('fixed');
  }else{
    fixedNav.classList.remove('fixed');
  }
});
//copyright date
 copydate.innerHTML = new Date().getFullYear();

 // // responsible navbar
 navBtn.addEventListener("click",function(){  

      let value = navLinks.classList.contains('shownav');
      if(value){
        navLinks.classList.remove('shownav');
        navBtn.classList.remove('change');
      }
      else{
        navLinks.classList.add('shownav');
        navBtn.classList.add('change');
      }
    
    });
  })();