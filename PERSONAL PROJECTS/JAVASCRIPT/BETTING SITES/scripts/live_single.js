

const headerLi = document.querySelectorAll('.header-2-items li')
const liSec = document.querySelectorAll('.odds-details-section')


function trasition(){

    headerLi.forEach(link => {
    link.addEventListener('click',()=>{
        const secId = link.dataset.secId;
        console.log(secId)
        headerLi.forEach(link=>{

            link.classList.remove('single-active');
        })
        link.classList.add('single-active');


        liSec.forEach(sec=>{
        sec.classList.remove('sec-active');

        })

        const element = document.getElementById(`${secId}`);
        element.classList.add('sec-active');
        console.log(link)

    
    })
    
});
console.log(document.querySelectorAll('.header-2-items li'))




}
trasition();