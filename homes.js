let homes = [];

function createHome() {
    if (money >= 50000) {
        money -= 50000;
        homes.push({ name: `Home #${homes.length + 1}`, value: 50000 });
        renderHomes();
    } else {
        alert("Not enough money for a home!");
    }
}

function renderHomes() {
    const div = document.getElementById("yourHomes");
    div.innerHTML = "";
    homes.forEach(home => {
        div.innerHTML += `${home.name} | $${home.value}<br>`;
    });
}

setInterval(renderHomes, 500);

