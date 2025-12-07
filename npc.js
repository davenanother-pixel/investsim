let npcStock = { shares: 5000, price: 80 };

// Buy NPC stock function (for default stock)
function buyNPCStock() {
    if (money >= npcStock.price && npcStock.shares > 0) {
        money -= npcStock.price;
        npcStock.shares -= 1;
        stocks[0].shares += 1; // default stock
        updateDisplay();
        renderStocks();
    }
}

// NPC automatic stock interaction
setInterval(() => {
    if (stocks.length === 0) return;

    // Randomly pick a stock
    let stock = stocks[Math.floor(Math.random() * stocks.length)];
    
    // Random buy or sell chance
    let action = Math.random();
    
    if (action < 0.05) { // 5% chance to buy
        if (npcStock.shares > 0) {
            stock.shares += 1;
            npcStock.shares -= 1;
        }
    } else if (action < 0.1) { // 5% chance to sell
        if ((stock.shares || 0) > 0) {
            stock.shares -= 1;
            npcStock.shares += 1;
        }
    }
}, 2000);

// NPC stock price fluctuation
setInterval(() => {
    stocks.forEach(stock => {
        let change = (Math.random() - 0.5) * 10; // ±5%
        stock.price = Math.max(1, Math.floor(stock.price * (1 + change / 100)));
    });
    // Update NPC stock display for default stock
    const npcDiv = document.getElementById("npcStocks");
    if (npcDiv) npcDiv.innerHTML = `NPC shares: ${npcStock.shares} | Price: $${stocks[0].price}`;
    renderStocks();
}, 1000);
