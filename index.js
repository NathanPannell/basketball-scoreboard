let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function homeAdd(increment) {
    homeScore += increment
    homeEl.textContent = String(homeScore).padStart(3, "0")
}

function guestAdd(increment) {
    guestScore += increment
    guestEl.textContent = String(guestScore).padStart(3, "0")
}

function clearHome() {
    homeScore = 0
    homeEl.textContent = "000"
}

function clearGuest() {
    guestScore = 0
    guestEl.textContent = "000"
}