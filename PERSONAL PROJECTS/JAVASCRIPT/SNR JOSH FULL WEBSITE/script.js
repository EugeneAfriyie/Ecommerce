const menu = document.querySelector('.js-menu-icon');
const menuDIV = document.querySelector('.jc-menu-container');
const closeBtn = document.querySelector('.close-icon');
const openBtn = document.querySelector('.open-icon');
const answerDiv = document.querySelector('.js-answer');
const answerCon = document.querySelector('.question-con');
const closeAnswerIcon = document.getElementById('close-answer');
const answerDivClick = answerCon.addEventListener;






menuDIV.style.display = 'block' 
menuDIV.style.right = '-100%' 

menu.addEventListener('click',()=>{
    // menuDIV.classList.add('active');
    menuDIV.style.display = 'block' 
    menuDIV.style.right = '0' 


})
closeBtn.addEventListener('click',()=>{
    menuDIV.style.right = "-100%" 
    // menuDIV.classList.add('active');

})


document.querySelectorAll('.open-icon').forEach(element => {
    element.addEventListener('click',()=>{
        answerDiv.classList.remove('active-answer-close');
        answerDiv.classList.add('active-answer');
        openBtn.style.display ='none';
        closeAnswerIcon.style.display = 'block';
    
    })
});

// openBtn.addEventListener('click',()=>{
//     answerDiv.classList.remove('active-answer-close');
//     answerDiv.classList.add('active-answer');
//     openBtn.style.display ='none';
//     closeAnswerIcon.style.display = 'block';

// })


closeAnswerIcon.addEventListener('click',()=>{
    answerDiv.classList.remove('active-answer');
    answerDiv.classList.add('active-answer-close');
    openBtn.style.display ='block';
    closeAnswerIcon.style.display = 'none';
});

// answerCon.addEventListener('click',()=>{
//     if( openBtn.style.display ='block'){
//         answerDiv.classList.remove('active-answer-close')
//         answerDiv.classList.add('active-answer')
    
//     }
//      else if(closeAnswerIcon.style.display = 'block'){
//         answerDiv.classList.remove('active-answer');
//         answerDiv.classList.add('active-answer-close')
        
//     }
// })






    
   
