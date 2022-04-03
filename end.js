const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')
// saveScoreBtn.disabled = true;

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
})

username.addEventListener("change", () => {
    saveScoreBtn.disabled = !username.value;
})


saveHighScore = e => {
    console.log("clicked the save botton")
    e.preventDefault();
}