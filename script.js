

function Clock() {
    let date = new Date();
    let h = String(date.getHours()).padStart(2, '0');
    let m = String(date.getMinutes()).padStart(2, '0');
    let s = String(date.getSeconds()).padStart(2, '0');

    document.getElementById("hour").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
}


setInterval(Clock, 1000);
Clock();