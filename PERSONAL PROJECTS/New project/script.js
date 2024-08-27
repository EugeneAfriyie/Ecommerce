const menu = document.getElementById('menu');
const menuContainer = document.querySelector('.jc-menu-container');
const closeBtn = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');



function menuFunc() {
    

    menu.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
        overlay.style.display = 'block';

    });

    closeBtn.addEventListener('click', () => {
       onOff();


    });

    overlay.addEventListener('click',()=>{
      onOff();

    })


}

menuFunc();


const onOff =()=>{
     menuContainer.classList.remove('active')
        overlay.style.display = 'none'
}