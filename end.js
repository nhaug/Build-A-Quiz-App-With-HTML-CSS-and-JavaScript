const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')
saveScoreBtn.disabled = true;
    
    const mostRecentScore = localStorage.getItem("mostRecentScore");
    console.log(mostRecentScore);
    finalScore.innerText = mostRecentScore;

username.addEventListener( "keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})


saveHighScore = e => {
    console.log("clicked the save botton")
    e.preventDefault();
}