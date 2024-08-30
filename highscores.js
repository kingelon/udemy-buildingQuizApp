const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `
    <div class="highscore-row">
      <div class="highscore-cell">${score.name}</div>
      <div class="highscore-cell">${score.score}</div>
      <div class="highscore-cell">${score.comment || ''}</div>
    </div>
    `;
  })
  .join("");
