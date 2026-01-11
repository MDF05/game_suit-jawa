function playGame(playerChoice) {
  // Generate Computer Choice
  const compChoices = ["gajah", "orang", "semut"];
  const random = Math.random();
  let compChoice;

  if (random < 0.34) {
    compChoice = "gajah";
  } else if (random < 0.67) {
    compChoice = "orang";
  } else {
    compChoice = "semut";
  }

  // Determine Winner using Rules
  // Gajah > Orang
  // Orang > Semut
  // Semut > Gajah
  let result = "";

  if (playerChoice === compChoice) {
    result = "SERI! 🤝";
  } else if (playerChoice === "gajah") {
    result = (compChoice === "orang") ? "MENANG! 🎉" : "KALAH! ⛔";
  } else if (playerChoice === "orang") {
    result = (compChoice === "semut") ? "MENANG! 🎉" : "KALAH! ⛔";
  } else if (playerChoice === "semut") {
    result = (compChoice === "gajah") ? "MENANG! 🎉" : "KALAH! ⛔";
  }

  // Update UI
  updateUI(playerChoice, compChoice, result);
}

function updateUI(player, computer, result) {
  const vsText = document.getElementById("vs-text");
  const resultMessage = document.getElementById("result-message");

  const emojiMap = {
    "gajah": "🐘",
    "orang": "🧍",
    "semut": "🐜"
  };

  vsText.innerHTML = `Kamu ${emojiMap[player]} vs ${emojiMap[computer]} Komputer`;
  resultMessage.innerText = result;

  // Add color based on result
  if (result.includes("MENANG")) {
    resultMessage.style.color = "#28a745";
  } else if (result.includes("KALAH")) {
    resultMessage.style.color = "#dc3545";
  } else {
    resultMessage.style.color = "#6c757d";
  }
}
