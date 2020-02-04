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
    // // Header slider

    let bcg = ['headerbcg-1','headerbcg-2','headerbcg-3'];
    const headerBcg = document.querySelector('#header');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    let counter = 0;

          btnLeft.addEventListener("click", function(){
            counter--;
            if (counter<1){
              counter = bcg.length;
            }
            
            headerBcg.style.backgroundImage = `url('../images/headerbcg-${counter}.jpg')`;
           
              });

              btnRight.addEventListener("click", function(){
                if (counter>bcg.length-1){
                  counter = 0;
                }
                counter++;
                headerBcg.style.backgroundImage = `url('../images/headerbcg-${counter}.jpg')`;
               
                  });
})();



