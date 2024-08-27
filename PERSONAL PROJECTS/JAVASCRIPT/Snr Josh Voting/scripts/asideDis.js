export default function asideDisplay (){

    const aside = document.querySelector('.aside');
const overlay = document.querySelector('.overlay');
const menu = document.getElementById('menu');

    menu.addEventListener('click',()=>{
        aside.style.display = 'block';
        overlay.style.display = 'block'
        aside.classList.toggle('display')
    })


    overlay.addEventListener('click',()=>{
        aside.classList.toggle('display')
        overlay.style.display = 'none'

    })
    


    
    
}

asideDisplay();