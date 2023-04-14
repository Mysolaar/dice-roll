let diceType = "d4";

function updateDiceType() {
    // Update the dice type variable based on the dropdown selection
    diceType = document.getElementById("diceType").value;
}

function rollDice() {
    // Get the number of rolls and the maximum value of the selected dice type
    const numRolls = document.getElementById("numRolls").value;
    const maxValue = diceType.slice(1); // Get the number after "d" in the dice type

    // Roll the dice the specified number of times and add up the results
    let total = 0;
        
    for (let i = 0; i < numRolls; i++) {
        const randomNumber = Math.floor(Math.random() * maxValue) + 1;
        total += randomNumber;
    }

    // Add the number entered in the input field to the total
    const numToAdd = parseInt(document.getElementById("numToAdd").value);
    total += numToAdd;
    
    const numRolled = total - numToAdd;

    // Display the result
    document.getElementById("result").innerHTML = `
        <p class="result__txt">Using ${numRolls} of ${diceType}, You rolled: ${numRolled} + ${numToAdd} = <span class="total-roll">${total}</span>
        </p>`;
}