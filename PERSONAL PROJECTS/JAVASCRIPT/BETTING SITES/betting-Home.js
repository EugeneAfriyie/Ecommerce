const moreSport = document.querySelector('.more-sport');
const arrowUp = document.querySelector('.arrow-up');
const moreSportItems = document.querySelector('.more-sport-items');
const arrowDown = document.querySelector('.arrow-down');
const displayed = document.querySelector('.displayed');
moreSportItems.style.display = 'none';

moreSport.addEventListener('click', () => {
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
