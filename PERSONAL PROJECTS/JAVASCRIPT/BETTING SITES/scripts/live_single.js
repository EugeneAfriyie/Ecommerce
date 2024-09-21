

const headerLi = document.querySelectorAll('.header-2-items li')


function trasition(){

    headerLi.forEach(link => {
    link.addEventListener('click',()=>{
        const secId = link.dataset.secId;
        console.log(secId)
        headerLi.forEach(link=>{

            link.classList.remove('single-active');
        })
        link.classList.add('single-active');
        console.log(link)

    
    })
    
});
console.log(document.querySelectorAll('.header-2-items li'))




}
trasition();