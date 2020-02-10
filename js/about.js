// active menu
(function(){
  const menuActive =document.querySelectorAll('.link');

  // menu active
  menuActive.forEach(function(menu){
    menu.addEventListener("click",function(e){
      e.preventDefault();
     let url = menu.getAttribute('href');
    //  console.log(url);
     if(document.URL === url){
      this.classList.add('active') ;
     }
    });

  });

})();

(function(){

  const fixedNav = document.querySelector('.navbar');
  const copydate = document.querySelector('#date');
  const navBtn = document.querySelector('.nav-button');
   const navLinks = document.querySelector('.navlinks'); 
   const menuActive =document.querySelectorAll('.links')
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

    
    //testimonial setup
let allTestimonial = [{
  text: ` " Honest conflict has more social value than dishonest harmony. "`,
  name: `Joe Rogan`,
  image: '../images/customer-0.jpg'
},
{
  text: ` " If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.. "`,
name: `Jiddu Krishnamurti`,
image: '../images/customer-1.jpg'
},
{
text: ` " happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.. "`,
name: `Bradley Whitford`,
image: '../images/customer-2.jpg'
},
{
  text: ` "The greatest discovery of all time is that a person can change his future by merely changing his attitude. "`,
  name: `Oprah Winfrey`,
  image: '../images/customer-3.jpg'
  },
  {
  text: ` "Decide what you want, decide what you are willing to exchange for it. Establish your priorities and go to work."`,
  name: `H. L. Hunt`,
  image:'../images/customer-4.jpg'
  }
];
const customerText = document.querySelector('.customer-text');
const customerImage = document.querySelector('#customer-img');
const customerName = document.querySelector('.customer-name');
const prevBtn = document.querySelector('.prevBtnt');
const nexBtn = document.querySelector('.nexBtnt');


let testiCount = 0;
prevBtn.addEventListener("click",function(){
  testiCount --;
  if(testiCount<0){
    testiCount = allTestimonial.length-1;
  }
  customerText.textContent = allTestimonial[testiCount].text;
  customerImage.src = allTestimonial[testiCount].image;
  customerName.textContent = allTestimonial[testiCount].name;


});

nexBtn.addEventListener("click",function(){
  testiCount ++;
  if(testiCount> allTestimonial.length-1){
    testiCount = 0;
  }
  customerText.textContent = allTestimonial[testiCount].text;
  customerName.textContent = allTestimonial[testiCount].name;
  customerImage.src = allTestimonial[testiCount].image;


});

})();

// Gallery lightbox
(function(){
  let modalCounter = 0;
  let allImage = [];

  const galleryIcon = document.querySelectorAll('.gallery-icon');
   const images = document.querySelectorAll('.gallery-image');
   const container = document.querySelector('.modal-container');
   const closeIcon = document.querySelector('.modal-close');
   const modalLeftIcon = document.querySelector('.mbtnLeft');
   const modalRightIcon = document.querySelector('.mbtnRight');
   const imageHolder = document.querySelector('.modal-item');
 
   images.forEach(function(image){
     allImage.push(image.src);
    
   });
   
   galleryIcon.forEach(function(icon){
// get source
     icon.addEventListener("click",function(e){
       // show modal
       container.classList.add('showModal');
       // get source
       let element = e.target.previousElementSibling.src;
       modalCounter = allImage.indexOf(element);
       imageHolder.src = allImage[modalCounter];

   });
   
   });
    //close modal
    closeIcon.addEventListener("click",function(){
      container.classList.remove('showModal');
  
    });
    //loop throught
     // loop back
     modalLeftIcon.addEventListener("click", function() {
      modalCounter--;
      if (modalCounter < 0) {
        modalCounter = allImage.length - 1;
      }
     //  console.log(modalCounter);
      imageHolder.src = allImage[modalCounter];
    });
 
    modalRightIcon.addEventListener("click", function() {
     modalCounter++;
     if (modalCounter > allImage.length - 1) {
       modalCounter = 0;
     }
     // console.log(modalCounter);
     imageHolder.src = allImage[modalCounter];
   });
  })();
  