// // fixed NAvigation function

(function(){
  
  const fixedNav = document.querySelector('.navbar');
  const copydate = document.querySelector('#date');
  const navBtn = document.querySelector('.nav-button');
   const navLinks = document.querySelector('.navlinks'); 
 
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


// (function(){
// 
//   const scrollLinks = documment.querySelectorAll('.scroll-link');
// console.log(scrollLinks)


//   

 

//   // links on little screen
//   scrollLinks.forEach(function(link){

//    link.addEventListener("click",function(e){
//      e.preventDefault();
//      if(innerWidth < 500){
//        navLinks.classList.remove('navlinks')
//      }else{
//       navLinks.classList.add('navlinks')
//      }

//    });

//  });

// })();

// 



