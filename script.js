function checkVotingEligibility() {
    const age = parseInt(document.getElementById("ageInput").value);
  
    if (age >= 18) {
      document.getElementById("result").textContent = "You are eligible to vote.";
    } else if (age >= 0) {
      document.getElementById("result").textContent = "You are not eligible to vote.";
    } else {
      document.getElementById("result").textContent = "Invalid input. Please enter a valid age.";
    }
  }
  
  function generateMultiplicationTable() {
    const number = parseInt(document.getElementById("numberInput").value);
  
    if (isNaN(number)) {
      document.getElementById("multiplicationTableResult").textContent = "Invalid input. Please enter a valid number.";
    } else {
      let table = "";
      for (let i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
      }
      document.getElementById("multiplicationTableResult").innerHTML = table;
    }
  }