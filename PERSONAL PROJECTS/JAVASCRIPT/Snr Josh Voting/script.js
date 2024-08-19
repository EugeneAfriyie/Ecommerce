
import './array-cat/category.js'
import { fashionable, president,categories } from './array-cat/category.js';


const aLinks = document.querySelectorAll('.aside-a');
const sect = document.querySelectorAll('.main-page-content');
const categoryType = document.querySelectorAll('.category-type');
const pageHeader = document.querySelectorAll(".page-title");
const categoryBody = document.querySelector(".categories-body");






















aLinks.forEach(link =>{

    link.addEventListener('click',()=>{
        const id = link.dataset.id;

        if(id === 'categories'){

            

            // console.log(categoryBody.innerHTML)

       

            

        }
    })
})

let categoryHTML = '';

categories.forEach(category=>{


                

    categoryHTML += `
        <tr class="category-type" data-id="${category.id}">
        <td>
        
             <a href="./nominee.html">
                ${category.categoryName}
            </a>
        
        </td>
        <td>
            <a href="./nominee.html">
                ${category.numOfNominees}
            </a>
        </td>
        <td>
            <a href="./nominee.html">
                ${category.noOfVotes}
            </a>
        </td>
        <td>
            <a href="./nominee.html">
                ${category.totalVoteAmount}
            </a>
        </td>
        <td>
          Delete
        </td>
    </tr>
    
`;



})

console.log(categoryHTML)
categoryBody.innerHTML = categoryHTML;












