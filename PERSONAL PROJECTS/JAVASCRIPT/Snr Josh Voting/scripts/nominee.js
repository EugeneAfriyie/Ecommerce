import { categories } from "./array-cat/category.js";
import asideDisplay from "./asideDis.js";

asideDisplay();

const categoryClickedId = localStorage.getItem('categoryClickedId');

categories.forEach(category =>{
    let nomineeHTML=''
    if(category.id === categoryClickedId){
        category.nomineeArray.forEach(item =>{

            // console.log(.nomineeArray.type)

            nomineeHTML += `
            
            
            <div class="nominee-details">
                    <div class="blue-back"></div>
                    <div class="white-back">
                    <h3 class="nominee-name">${item.name}</h3>
                    <p class="nominee-position">${item.type}</p>

                    <div class="vote-details">
                        <div class="num-vote">
                            <p>No. of Votes</p>
                            <p>${item.voteNumber}</p>
                        </div>
                        <div class="num-vote">
                            <p>Vote Amount</p>
                            <p>GH₵${item.voteAmount}</p>
                        </div>
                    </div>
                    <a href="#" class="view-details">
                        View Details
                    </a>

                    <div class="profie-pic C-cont">
                        <img src="${item.image}" alt="" >
                    </div>
                    </div>
                </div>
            
            
            
            
            `
        });

        // console.log(nomineeHTML);
        document.querySelector('.nominated').innerHTML= nomineeHTML;

    }
})


function checkWidth() {
    if (window.innerWidth < 700) {
        console.log("Current innerWidth:", window.innerWidth);
        console.log("Viewport width in DevTools:", window.visualViewport.width);;
        console.log("Device Pixel Ratio:", window.devicePixelRatio);


    } else {
      console.log("Page width is 500px or more");
      console.log("Current innerWidth:", window.innerWidth);
      console.log("Device Pixel Ratio:", window.devicePixelRatio);


    }
  }
  
  window.addEventListener('resize', checkWidth);
  
  // Check width on page load
  checkWidth();