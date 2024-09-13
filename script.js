const redDice = [
    { damage: 1, surge: 0, range: 0, image: 'Assets/dicefaces/r1.png' },
    { damage: 2, surge: 0, range: 0, image: 'Assets/dicefaces/r2.png' },
    { damage: 2, surge: 0, range: 0, image: 'Assets/dicefaces/r3.png' },
    { damage: 2, surge: 1, range: 0, image: 'Assets/dicefaces/r4.png' },
    { damage: 3, surge: 0, range: 0, image: 'Assets/dicefaces/r5.png' },
    { damage: 3, surge: 0, range: 0, image: 'Assets/dicefaces/r6.png' }
  ];
  
  const blueDice = [
    { damage: 0, surge: 1, range: 2, image: 'Assets/dicefaces/b1.png' },
    { damage: 1, surge: 0, range: 2, image: 'Assets/dicefaces/b2.png' },
    { damage: 2, surge: 0, range: 3, image: 'Assets/dicefaces/b3.png' },
    { damage: 1, surge: 1, range: 3, image: 'Assets/dicefaces/b4.png' },
    { damage: 2, surge: 0, range: 4, image: 'Assets/dicefaces/b5.png' },
    { damage: 3, surge: 0, range: 5, image: 'Assets/dicefaces/b6.png' }
  ];
  
  const greenDice = [
    { damage: 0, surge: 1, range: 1, image: 'Assets/dicefaces/g1.png' },
    { damage: 1, surge: 1, range: 1, image: 'Assets/dicefaces/g2.png' },
    { damage: 2, surge: 0, range: 1, image: 'Assets/dicefaces/g3.png' },
    { damage: 1, surge: 1, range: 2, image: 'Assets/dicefaces/g4.png' },
    { damage: 2, surge: 0, range: 2, image: 'Assets/dicefaces/g5.png' },
    { damage: 2, surge: 0, range: 3, image: 'Assets/dicefaces/g6.png' }
  ];
  
  const yellowDice = [
    { damage: 0, surge: 1, range: 0, image: 'Assets/dicefaces/y1.png' },
    { damage: 1, surge: 2, range: 0, image: 'Assets/dicefaces/y2.png' },
    { damage: 2, surge: 0, range: 1, image: 'Assets/dicefaces/y3.png' },
    { damage: 1, surge: 1, range: 1, image: 'Assets/dicefaces/y4.png' },
    { damage: 3, surge: 1, range: 2, image: 'Assets/dicefaces/y5.png' },
    { damage: 1, surge: 0, range: 2, image: 'Assets/dicefaces/y6.png' }
  ];
  
  const blackDice = [
    { defend: 1, surgeBlock: 0, image: 'Assets/dicefaces/bl1.png' },
    { defend: 1, surgeBlock: 0, image: 'Assets/dicefaces/bl2.png' },
    { defend: 2, surgeBlock: 0, image: 'Assets/dicefaces/bl3.png' },
    { defend: 2, surgeBlock: 0, image: 'Assets/dicefaces/bl4.png' },
    { defend: 3, surgeBlock: 0, image: 'Assets/dicefaces/bl5.png' },
    { defend: 0, surgeBlock: 1, image: 'Assets/dicefaces/bl6.png' }
  ];
  
  const whiteDice = [
    { defend: 0, surgeBlock: 0, image: 'Assets/dicefaces/w1.png' },
    { defend: 1, surgeBlock: 0, image: 'Assets/dicefaces/w2.png' },
    { defend: 0, surgeBlock: 1, image: 'Assets/dicefaces/w3.png' },
    { defend: 1, surgeBlock: 1, image: 'Assets/dicefaces/w4.png' },
    { defend: 1, surgeBlock: 1, image: 'Assets/dicefaces/w5.png' },
    { defend: 100, surgeBlock: 100, image: 'Assets/dicefaces/w6.png'} // Special result for white die
  ];
  
  
  // Roll a single die and return the result
  function rollDie(die) {
    const roll = die[Math.floor(Math.random() * die.length)];
    return roll;
  }
  
// Roll multiple dice and display images based on the result
function rollMultipleDice(die, count, containerId) {
    const container = document.getElementById(containerId);
  
    // Clear previous dice results
    container.innerHTML = '';
  
    let totalDamage = 0;
    let totalSurge = 0;
    let totalRange = 0;
    let totalDefend = 0;
    let totalSurgeBlock = 0;
  
    for (let i = 0; i < count; i++) {
      const result = rollDie(die);
      
      // Create an img element for each rolled die
      const img = document.createElement('img');
      img.src = result.image;
      img.alt = `Die result: ${result.damage !== undefined ? result.damage : result.defend} result`;
  
      // Append the image to the container
      container.appendChild(img);
  
      // Accumulate results
      if (result.damage !== undefined) {
        totalDamage += result.damage;
        totalSurge += result.surge;
        totalRange += result.range;
      } else if (result.defend !== undefined) {
        totalDefend += result.defend;
        totalSurgeBlock += result.surgeBlock;
      }
    }
  
    return { totalDamage, totalSurge, totalDefend, totalRange, totalSurgeBlock };
  }
  
  
    function rollDice() {
      // Clear all dice result containers
    document.getElementById('red-dice-results').innerHTML = '';
    document.getElementById('blue-dice-results').innerHTML = '';
    document.getElementById('yellow-dice-results').innerHTML = '';
    document.getElementById('green-dice-results').innerHTML = '';
    document.getElementById('black-dice-results').innerHTML = '';
    document.getElementById('white-dice-results').innerHTML = '';
    // Get selected number of dice to roll
    const redCount = parseInt(document.getElementById('redDice').value);
    const blueCount = parseInt(document.getElementById('blueDice').value);
    const yellowCount = parseInt(document.getElementById('yellowDice').value);
    const greenCount = parseInt(document.getElementById('greenDice').value);
    const blackCount = parseInt(document.getElementById('blackDice').value);
    const whiteCount = parseInt(document.getElementById('whiteDice').value);
  
    let totalAttack = 0;
    let totalSurge = 0;
    let totalRange = 0;
    let totalDefense = 0;
    let totalSurgeBlock = 0;
  
    // Roll the selected number of each die and display images
    if (redCount > 0) {
      const redResult = rollMultipleDice(redDice, redCount, 'red-dice-results');
      totalAttack += redResult.totalDamage;
      totalSurge += redResult.totalSurge;
      totalRange += redResult.totalRange;
    }
    if (blueCount > 0) {
      const blueResult = rollMultipleDice(blueDice, blueCount, 'blue-dice-results');
      totalAttack += blueResult.totalDamage;
      totalSurge += blueResult.totalSurge;
      totalRange += blueResult.totalRange;
    }
    if (yellowCount > 0) {
      const yellowResult = rollMultipleDice(yellowDice, yellowCount, 'yellow-dice-results');
      totalAttack += yellowResult.totalDamage;
      totalSurge += yellowResult.totalSurge;
      totalRange += yellowResult.totalRange;
    }
    if (greenCount > 0) {
      const greenResult = rollMultipleDice(greenDice, greenCount, 'green-dice-results');
      totalAttack += greenResult.totalDamage;
      totalSurge += greenResult.totalSurge;
      totalRange += greenResult.totalRange;
    }
    if (blackCount > 0) {
      const blackResult = rollMultipleDice(blackDice, blackCount, 'black-dice-results');
      totalDefense += blackResult.totalDefend;
      totalSurgeBlock += blackResult.totalSurgeBlock;
    }
    if (whiteCount > 0) {
      const whiteResult = rollMultipleDice(whiteDice, whiteCount, 'white-dice-results');
      totalDefense += whiteResult.totalDefend;
      totalSurgeBlock += whiteResult.totalSurgeBlock;
    }
  
    // Display total results
    if (totalDefense < 100) {
      document.getElementById('results').innerText = `
        Attack: ${totalAttack},
        Surge: ${totalSurge},
        Range: ${totalRange},
        Defense: ${totalDefense}, 
        Surge Block: ${totalSurgeBlock},
      `;
    } else {
      document.getElementById('results').innerText = "They Missed!!!";
    }
  }
  