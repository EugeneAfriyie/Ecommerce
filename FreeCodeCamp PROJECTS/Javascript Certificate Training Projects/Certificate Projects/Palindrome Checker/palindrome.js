document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');


    if (textInput.trim() === '') {
        alert('Please input a value');
        return;
    }

   
    function isPalindrome(str) {
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
        return cleanStr === cleanStr.split('').reverse().join(''); 
    }

   
    if (isPalindrome(textInput)) {
        resultElement.textContent = `${textInput} is a palindrome`;
  

    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
    }

      textInput = ''
});