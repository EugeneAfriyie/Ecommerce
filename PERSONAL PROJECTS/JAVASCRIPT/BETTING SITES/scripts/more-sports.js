
 export default function moreSportCon(){

    const moreSport = document.querySelectorAll(`.more-sport`);

const displayed = document.querySelector(`.displayed`);
// moreSportItems.style.display = 'none';

moreSport.forEach((button)=>{
   const id = button.dataset.id
   const arrowUp = document.querySelector(`.arrow-up-${id}`);
const moreSportItems = document.querySelector(`.more-sport-items-${id}`);
const arrowDown = document.querySelector(`.arrow-down-${id}`);
    console.log(button)
button.addEventListener('click', () => {
    if (moreSportItems.style.display === 'none' || moreSportItems.style.display === "") {
        moreSportItems.style.display = 'grid';
        arrowUp.classList.remove('arrow');
        arrowDown.classList.add('arrow');
        console.log(arrowUp.classList);
    } else {
        moreSportItems.style.display = 'none';
        arrowUp.classList.add('arrow');
        arrowDown.classList.remove('arrow');
    }
});
})

}

console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());