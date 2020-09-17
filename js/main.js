const navAnimation = function()
{
    const burgerBtn = document.querySelector('.burger');
    const navMenu = document.querySelector('.mobile-nav ul');
  
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger-open');
        navMenu.classList.toggle('menu-open');
       
    });
     
}
navAnimation();
