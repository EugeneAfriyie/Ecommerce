
import './array-cat/category.js'
import { categories } from './array-cat/category.js';
import asideDisplay from './asideDis.js';


const aLinks = document.querySelectorAll('.aside-a');
const sect = document.querySelectorAll('.main-page-content');
const categoryType = document.querySelectorAll('.category-type');
const pageHeader = document.querySelectorAll(".page-menu");
const categoryBody = document.querySelector(".categories-body");
const searchIcon = document.querySelector(".search-icon");
const pageTitle = document.querySelector(".page-title");
const searchInput = document.querySelector(".search-input");

function renderCategories(){
    let categoryHTML = '';

    categories.forEach(category=>{

        let numOfNominees = 0;
        let noOfVotes = 0;
        let totalVoteAmount = 0;
        category.nomineeArray.forEach(item=>{

            totalVoteAmount  += item.voteAmount;
            noOfVotes += item.voteNumber;


        })
    
        categoryHTML += `
            <tr class="category-type category-type-${category.id} nominee" data-id="${category.id}">
                <td class="nominee">
                
                    <a href="./nominee.html"  >
                        ${category.categoryName}
                    </a>
                
                </td>
                <td >
                    <a href="./nominee.html"   >
                        ${category.nomineeArray.length}
                    </a>
                </td>
    
                <td class="nominee"  data-id="${category.id}">
                    <a  >
                        ${noOfVotes}
                    </a>
                </td>
                <td >
                    <a href="./nominee.html " class="nominee"  >
                        ${totalVoteAmount}
                    </a>
                </td>
                <td class='delete delete-${category.id}' data-id="${category.id}">
                    Delete
                </td>
            </tr>
        
    `;
    
    })
    categoryBody.innerHTML = categoryHTML;
    // console.log(categoryHTML)
}

renderCategories();





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


function deleteFun() {
    const deleteBtns = document.querySelectorAll('.delete');

        deleteBtns.forEach(btn=>{

        
        btn.addEventListener('click', () => {
            const id =  btn.dataset.id;


            categories.forEach((item,i)=>{
                if(item.id === id){
                    categories.splice(i,1)
                }
            })

            const categoryElement = document.querySelector(`.category-type-${id}`);
            if (categoryElement) {
                categoryElement.remove();
                
            } 
        });
    })

}
deleteFun();

function checkWidth() {
    const actualWidth = window.innerWidth / window.devicePixelRatio;
    console.log(`Actual width: ${actualWidth}px`);
    
    if (actualWidth < 500) {
        console.log("Page width is less than 500px");
    } else {
        console.log("Page width is 500px or more");
    }
}

// Call the function when the page loads and when the window is resized
window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);


  

    


