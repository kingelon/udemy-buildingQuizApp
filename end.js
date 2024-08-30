const username = document.getElementById('username');
const comment = document.getElementById('comment');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const MAX_HIGH_SCORES = 5;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener('input', checkInput);
comment.addEventListener('input', checkInput);

function checkInput() {
    saveScoreBtn.disabled = username.value.trim() === '' && comment.value.trim() === '';
}

saveScoreBtn.addEventListener('click', saveHighScore);

function saveHighScore(e) {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
        comment: comment.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Optionally, you can redirect to the high scores page or back to the home page
    window.location.assign('/highscores.html');
}
