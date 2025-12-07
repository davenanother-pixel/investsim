let homes = [
    { name: "Cottage", price: 50000 },
    { name: "Villa", price: 150000 },
    { name: "Mansion", price: 500000 }
];

let ownedHomes = [];

function buyHome() {
    let home = homes[Math.floor(Math.random() * homes.length)];
    if (money < home.price) return alert("Not enough money!");

    money -= home.price;
    ownedHomes.push(home);
    addChangelogEntry(`Bought home: ${home.name} for $${fmt(home.price)}`);
    updateHomesDisplay();
    updateStocksDisplay();
}

function updateHomesDisplay() {
    const container = document.getElementById("homeList");
    container.innerHTML = ownedHomes.length ? ownedHomes.map(h => h.name).join("<br>") : "No homes owned";
}
    
