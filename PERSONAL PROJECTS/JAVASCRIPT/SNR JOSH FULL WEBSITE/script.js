











 const faq = [
    {
        id:1,
        questionText:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus ex',
                answerText: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus ex, laudantium voluptas labore officiis minimaLorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus ex, laudantium voluptas labore officiis minimaLorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus ex, laudantium voluptas labore officiis minima'

    },
    {
        id:2,
        questionText:'Lorem, ipsum dolor sit amet consectetur adipisicing eli',
        answerText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus ex, laudantium voluptas labore officiis minima'

    },
    {
        id:3,
        questionText:'Lorem, ipsum dolor sit ',
        answerText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos natus ex, laudantium voluptas labore officiis minima'

    }
 ]



    let faqHTML = '';
    faq.forEach(con =>{
        const conId = con.id;





        faqHTML +=   `
        
         <div class="faq-con faq-con-${con.id} ">
                    <div class="question-con">
                        <h4 class="faq-question faq-question-${con.id}">
                           ${con.questionText}
                            <i class=" open-icon-${con.id} fa-solid fa-plus"></i>
                            <i id="close-answer-${con.id} " class=" fa-solid fa-minus"></i>
                        </h4>
    
                    </div>
    
                    <div class="faq-answer js-answer-${con.id}">
                        <p>
                            ${con.answerText}
                        </p>
                    </div>
                </div>
        
        `;



        
            
    });

    document.querySelector('.allfaq').innerHTML = faqHTML;
    openBtn.classList.add('.close-answer');








// document.querySelectorAll('.open-icon').forEach(element => {
//     element.addEventListener('click',()=>{
//         answerDiv.classList.remove('active-answer-close');
//         answerDiv.classList.add('active-answer');
//         openBtn.style.display ='none';
//         closeAnswerIcon.style.display = 'block';
    
//     })
// });

// openBtn.addEventListener('click',()=>{
//     answerDiv.classList.remove('active-answer-close');
//     answerDiv.classList.add('active-answer');
//     openBtn.style.display ='none';
//     closeAnswerIcon.style.display = 'block';

// })


// closeAnswerIcon.addEventListener('click',()=>{
//     answerDiv.classList.remove('active-answer');
//     answerDiv.classList.add('active-answer-close');
//     openBtn.style.display ='block';
//     closeAnswerIcon.style.display = 'none';
// });

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






    
   
