
import './array-cat/category.js'
import { fashionable, president } from './array-cat/category.js';





const btns = document.querySelectorAll('.aside-a');
const sect = document.querySelectorAll('.main-page-content');
const categoryType = document.querySelectorAll('.category-type');
const pageHeader = document.querySelectorAll(".page-title");








categoryType.forEach(category=>{
    category.addEventListener('click',()=>{
        const id = category.dataset.id;
        // console.log(`${id}`)

        // id.forEach(item=>{
        //     console.log(item)
        // })
    })
})



btns.forEach(btn => {
    btn.addEventListener('click',()=>{

        const id = btn.dataset.id;
        // console.log(id)


        sect.forEach(sec =>{
            sec.classList.remove('active');
        })

        const element = document.getElementById(id)
        element.classList.add('active');

      




        pageHeader.innerHTML = id;
    })
    

});




