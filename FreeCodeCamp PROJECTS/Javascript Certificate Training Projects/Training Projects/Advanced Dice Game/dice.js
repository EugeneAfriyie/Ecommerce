// Function to detect a Full House (Three of one number and two of another)
const detectFullHouse = (diceValuesArr) => {
    const counts = {};
  
    // Count the occurrences of each dice value
    diceValuesArr.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
    });
  
    // Check for a full house (three of one number and two of another)
    const values = Object.values(counts);
    const hasThreeOfAKind = values.includes(3);
    const hasPair = values.includes(2);
  
    if (hasThreeOfAKind && hasPair) {
      // Full House detected - Update third radio button with score 25
      updateRadioOption(2, 25);
    }
  
    // Always update the last radio button with a score of 0
    updateRadioOption(5, 0);
  };
  
  // Call detectFullHouse when dice are rolled
  rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
      alert("You have made three rolls this round. Please select a score.");
    } else {
      rolls++;
      resetRadioOptions();
      rollDice();
      updateStats();
      getHighestDuplicates(diceValuesArr);
      detectFullHouse(diceValuesArr); // Call the new function
    }
  });
  