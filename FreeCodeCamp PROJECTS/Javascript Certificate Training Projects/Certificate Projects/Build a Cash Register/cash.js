let price = 19.5; // Example price, this can change based on input
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

document.getElementById("purchase-btn").addEventListener("click", function () {
  let cash = parseFloat(document.getElementById("cash").value);
  let changeDue = cash - price;
  let totalInDrawer = cid.reduce((sum, denomination) => sum + denomination[1], 0).toFixed(2);
  
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    document.getElementById("change-due").textContent = "No change due - customer paid with exact cash";
    return;
  }

  // Check if total in drawer equals change due (Status: CLOSED)
  if (parseFloat(totalInDrawer) === changeDue) {
    document.getElementById("change-due").textContent = "Status: CLOSED";

    // Sort denominations from highest to lowest and display them all
    let changeBreakdown = cid
      .filter(denomination => denomination[1] > 0) // Only display denominations with positive values
      .sort((a, b) => b[1] - a[1]) // Sort from highest to lowest
      .map(denom => `${denom[0]}: $${denom[1].toFixed(2)}`);

    document.getElementById("change-due").textContent += " " + changeBreakdown.join(", ");
    return;
  }

  // Check if there are insufficient funds in the drawer
  if (parseFloat(totalInDrawer) < changeDue) {
    document.getElementById("change-due").textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  // Otherwise, calculate the change to give back
  let change = [];
  let changeRemaining = changeDue;
  let denominationValues = [
    ["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25], 
    ["DIME", 0.1], 
    ["NICKEL", 0.05], 
    ["PENNY", 0.01]
  ];

  for (let i = 0; i < denominationValues.length; i++) {
    let denomName = denominationValues[i][0];
    let denomValue = denominationValues[i][1];
    let cidAmount = cid.find(denom => denom[0] === denomName)[1];

    if (changeRemaining >= denomValue && cidAmount > 0) {
      let denomToGive = 0;
      while (changeRemaining >= denomValue && cidAmount > 0) {
        changeRemaining -= denomValue;
        cidAmount -= denomValue;
        denomToGive += denomValue;
        changeRemaining = Math.round(changeRemaining * 100) / 100; // Fix floating point issue
      }
      change.push([denomName, denomToGive.toFixed(2)]);
    }
  }

  // Step 17: Check if the change can be given exactly with available denominations
  if (changeRemaining > 0) {
    document.getElementById("change-due").textContent = "Status: INSUFFICIENT_FUNDS";
  } else {
    document.getElementById("change-due").textContent = "Status: OPEN " + change.map(denom => `${denom[0]}: $${denom[1]}`).join(", ");
  }
});
