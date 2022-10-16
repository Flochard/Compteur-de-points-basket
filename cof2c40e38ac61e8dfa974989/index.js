let score_elH = document.getElementById("score-elH")
let score_elG = document.getElementById("score-elG")
let scoreH = 0
let scoreG = 0

function add1H() {
    scoreH += 1
    score_elH.textContent = scoreH
}

function add2H() {
    scoreH += 2
    score_elH.textContent = scoreH
}

function add3H() {
    scoreH += 3
    score_elH.textContent = scoreH
}

function add1G() {
    scoreG += 1
    score_elG.textContent = scoreG
}

function add2G() {
    scoreG += 2
    score_elG.textContent = scoreG
}

function add3G() {
    scoreG += 3
    score_elG.textContent = scoreG
}

