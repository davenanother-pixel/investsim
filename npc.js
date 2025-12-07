// NPC “money” to buy stocks
let npcMoney = 100000;

// Initialize NPC shares for each stock if missing
stocks.forEach(stock => {
    if (!stock.npcShares) stock.npcShares = 0;
});

// --- NPC automatic trading ---
setInterval(() => {
    if (stocks.length === 0) return;

    // Pick a random stock
    let stock = stocks[Math.floor(Math.random() * stocks.length)];

    // Random action: buy or sell
    let action = Math.random();

    if (action < 0.05) { // 5% chance to buy
        if (npcMoney >= stock.price) {
            stock.npcShares += 1;
            npcMoney -= stock.price;
        }
    } else if (action < 0.1) { // 5% chance to sell
        if (stock.npcShares > 0) {
            stock.npcShares -= 1;
            npcMoney += stock.price;
        }
    }
}, 2000);

// --- Render NPC stock holdings ---
function renderNPCStocks() {
    const npcDiv = document.getElementById("npcStocks");
    if (!npcDiv) return;

    npcDiv.innerHTML = stocks.map(stock => {
        return `${stock.name} | NPC shares: ${stock.npcShares} | Price: $${stock.price}`;
    }).join("<br>");
}

// Call once per second for smooth updates
setInterval(renderNPCStocks, 1000);
