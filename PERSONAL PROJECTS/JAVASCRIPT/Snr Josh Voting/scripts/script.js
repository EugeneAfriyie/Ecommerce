
import '../array-cat/category.js'
import { categories } from '../array-cat/category.js';


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
        <tr class="category-type nominee" data-id="${category.id}">
            <td class="nominee">
            
                <a href="./nominee.html"  >
                    ${category.categoryName}
                </a>
            
            </td>
            <td >
                <a href="./nominee.html"   >
                    ${category.numOfNominees}
                </a>
            </td>

            <td class="nominee"  data-id="${category.id}">
                <a  >
                    ${category.noOfVotes}
                </a>
            </td>
            <td >
                <a href="./nominee.html " class="nominee"  >
                    ${category.totalVoteAmount}
                </a>
            </td>
            <td>
            Delete
            </td>
        </tr>
    
`;

})
categoryBody.innerHTML = categoryHTML;



// console.log(nomineeCon)













let categoryClickedId;
const nomineeCon = document.querySelectorAll(".nominee");
export function nomineeFunc(){
    nomineeCon.forEach(Con =>{
        Con.addEventListener('click',()=>{
            let id = Con.dataset.id
            // alert(id)
            categoryClickedId = id;

     localStorage.setItem('categoryClickedId', categoryClickedId);

    
        })
    })



    
}



nomineeFunc();




