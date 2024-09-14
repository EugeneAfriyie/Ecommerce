// Function to check for Small Straight (four consecutive numbers) and Large Straight (five consecutive numbers)
const checkForStraights = (diceValuesArr) => {
    // Sort and remove duplicates
    const sortedUniqueDice = [...new Set(diceValuesArr)].sort((a, b) => a - b);
  
    // Check for a large straight (1-2-3-4-5 or 2-3-4-5-6)
    const largeStraight1 = [1, 2, 3, 4, 5];
    const largeStraight2 = [2, 3, 4, 5, 6];
  
    if (JSON.stringify(sortedUniqueDice) === JSON.stringify(largeStraight1) || 
        JSON.stringify(sortedUniqueDice) === JSON.stringify(largeStraight2)) {
      // Large straight detected - Update fifth radio button with a score of 40
      updateRadioOption(4, 40);
    } 
    // Check for a small straight (any four consecutive numbers)
    else if (
      sortedUniqueDice.includes(1, 2, 3, 4) || 
      sortedUniqueDice.includes(2, 3, 4, 5) || 
      sortedUniqueDice.includes(3, 4, 5, 6)
    ) {
      // Small straight detected - Update fourth radio button with a score of 30
      updateRadioOption(3, 30);
    } 
    // No straight detected
    else {
      // Update last radio button with a score of 0
      updateRadioOption(5, 0);
    }
  };
  
  // Call checkForStraights when dice are rolled
  rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
      alert("You have made three rolls this round. Please select a score.");
    } else {
      rolls++;
      resetRadioOptions();
      rollDice();
      updateStats();
      getHighestDuplicates(diceValuesArr);
      detectFullHouse(diceValuesArr);
      checkForStraights(diceValuesArr); // Call the new function
    }
  });
  