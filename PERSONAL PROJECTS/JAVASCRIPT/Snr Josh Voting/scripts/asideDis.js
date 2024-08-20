export default function asideDisplay (){

    const aside = document.querySelector('.aside');
const overlay = document.querySelector('.overlay');
const menu = document.getElementById('menu');

    menu.addEventListener('click',()=>{
        aside.style.display = 'block';
        overlay.style.display = 'block'
        aside.classList.add('display')
    })


    overlay.addEventListener('click',()=>{
        aside.classList.remove('display')
        overlay.style.display = 'none'

    })
    


    
    
}

asideDisplay();