/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header=document.getElementById('header');
    this.scrollY>=50? header.classList.add('scroll-header'): header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);


/*=============== SERVICES MODAL ===============*/
const modalViews= document.querySelectorAll('.services__modal'),
modalBtns=document.querySelectorAll('.services__button'),
modalClose= document.querySelectorAll('.services__modal-close');
let modal= (modalClick)=>{
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((mb,i)=>{
    mb.addEventListener('click',()=>{
        modal(i);
    })
});
// let close =(closeClick)=>{
//     modalViews[closeClick].classList.remove('active-modal');
// }
// modalClose.forEach((mb,i)=>{mb.addEventListener('click',()=>{
//     close(i);
// })});
modalClose.forEach((mc)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv)=>{mv.classList.remove('active-modal');})
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let  mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item');
function activeWork (){
    linkWork.forEach(l=> l.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach(l => l.addEventListener('click',activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__container', {
  // Optional parameters
  spaceBetween:24,
  direction: 'horizontal',
  loop:true,
  grabCursor:true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },

  
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

