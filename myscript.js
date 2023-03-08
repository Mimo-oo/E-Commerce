function hide() {
    const x = document.getElementById("hidden")
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function display() {
    const xc = document.getElementById("state");
    xc.style.display = "block"
}

function notdisplay() {
    const c = document.getElementById("state");
    c.style.display = "none"
}

function adisplay() {
    const cb = document.getElementById("sort");
    cb.style.display = "block"
}

function anotdisplay() {
    const ca = document.getElementById("sort");
    ca.style.display = "none"
}