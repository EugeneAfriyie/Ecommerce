const menu = document.getElementById('menu');
const menuContainer = document.querySelector('.jc-menu-container');
const closeBtn = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');



function menuFunc() {
    

    menu.addEventListener('click', () => {
        menuContainer.classList.add('active');
        overlay.style.display = 'block';

    });

    closeBtn.addEventListener('click', () => {
        menuContainer.classList.remove('active');

    });

    overlay.addEventListener('click',()=>{
        menuContainer.classList.remove('active')
        overlay.style.display = 'none'

    })

    

 

    
}

menuFunc();
