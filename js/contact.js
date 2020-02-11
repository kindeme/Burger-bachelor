console.log(window.location.href);

(function(){

  const fixedNav = document.querySelector('.navbar');
  const copydate = document.querySelector('#date');
  const navBtn = document.querySelector('.nav-button');
   const navLinks = document.querySelector('.navlinks'); 
   const menuActive =document.querySelectorAll('.links')
   const menuActive =document.querySelectorAll('.link');

   // Active menu
   
   menuActive.forEach(function(menu){
         menu.addEventListener("click",function(e){
           e.preventDefault();
          let url = menu.getAttribute('href');
          let mainUrl = window.location.href;
          let number = mainUrl.indexOf(url);
          console.log(number);
          if(url === mainUrl.slice(22)){
            menu.classList.add('active');
          }else{
           menu.classList.remove('active');
          }
         
         })
       });
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