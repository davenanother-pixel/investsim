let npcStock = { shares: 5000 };

// NPC buys player stocks randomly
setInterval(() => {
    if (stocks.length === 0) return;

    // Pick a random stock
    let stock = stocks[Math.floor(Math.random() * stocks.length)];

    // Decide action: buy (5%) or sell (5%)
    let action = Math.random();

    if (action < 0.05) { // Buy
        if (npcStock.shares > 0) {
            stock.shares = (stock.shares || 0) + 1;
            npcStock.shares -= 1;
        }
    } else if (action < 0.1) { // Sell
        if ((stock.shares || 0) > 0) {
            stock.shares -= 1;
            npcStock.shares += 1;
        }
    }
}, 2000);

// Update NPC display
setInterval(() => {
    const npcDiv = document.getElementById("npcStocks");
    if (npcDiv && stocks[0]) {
        npcDiv.innerHTML = `NPC shares: ${npcStock.shares} | Price: $${stocks[0].price}`;
    }
}, 500);

