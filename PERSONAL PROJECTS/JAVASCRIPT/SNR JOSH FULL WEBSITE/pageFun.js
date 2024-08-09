const menu = document.querySelector('.js-menu-icon');
const menuDIV = document.querySelector('.jc-menu-container');
const closeBtn = document.querySelector('.close-icon');

const faq = [
    {
        id: 1,
        questionText: 'How do I contact customer support?',
        answerText: 'You can contact our customer support team through the "Contact Us" page on our website. We offer support via email, phone, and live chat. Our support team is available 24/7 to assist you with any inquiries.'

    },
    {
        id: 2,
        questionText: 'What services do you offer for website design and development?',
        answerText: 'We offer comprehensive website design and development services, including custom website creation, responsive design, content management systems (CMS) integration, and e-commerce solutions. Our team ensures that your website is visually appealing, user-friendly, and optimized for performance.'
    },
    {
        id: 3,
        questionText: 'How can your IT consulting services benefit my business? ',
        answerText: 'We offer comprehensive website design and development services, including custom website creation, responsive design, content management systems (CMS) integration, and e-commerce solutions. Our team ensures that your website is visually appealing, user-friendly, and optimized for performance.'
    }
];

export function menuFunc() {
    menuDIV.style.display = 'block';
    menuDIV.style.right = '-100%';

    menu.addEventListener('click', () => {
        menuDIV.style.right = '0';
    });

    closeBtn.addEventListener('click', () => {
        menuDIV.style.right = '-100%';
    });
}

export function renderFAQ() {
    let faqHTML = '';
    faq.forEach(con => {
        faqHTML += `
            <div class="faq-con faq-con-${con.id}">
    <div class="question-con">
        <h4 class="faq-question faq-question-${con.id}">
            ${con.questionText}
            <i id="open-icon-${con.id}" class="fa-solid fa-plus open-icon"></i>
            <i id="close-answer-${con.id}" class="fa-solid fa-minus close-answer-icon" style="display: none;"></i>
        </h4>
    </div>
    <div class="faq-answer js-answer-${con.id}">
        <div class="faq-answer-content">
            <p>${con.answerText}</p>
        </div>
    </div>
</div>

        `;
    });

    document.querySelector('.allfaq').innerHTML = faqHTML;

    
    faq.forEach(con => {
        const questionCon = document.querySelector(`.faq-question-${con.id}`);
        const answerDiv = document.querySelector(`.js-answer-${con.id}`);
        const openIcon = document.getElementById(`open-icon-${con.id}`);
        const closeIcon = document.getElementById(`close-answer-${con.id}`);


        questionCon.addEventListener('click', () => {
            if (answerDiv.style.height === '0px' || answerDiv.style.height === '') {
                answerDiv.style.height = answerDiv.scrollHeight + 'px';
                openIcon.style.display = 'none';
                closeIcon.style.display = 'inline-block';
        
                setTimeout(() => {
                    answerDiv.style.height = 'auto';
                }, 500); 
            } else {
                answerDiv.style.height = answerDiv.scrollHeight + 'px'; 
                openIcon.style.display = 'inline-block';
                closeIcon.style.display = 'none';
        
                setTimeout(() => {
                    answerDiv.style.height = '0px'; 
                }, 10); 
        }});
        
        

        
    });
}

