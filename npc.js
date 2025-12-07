let npcStock = { shares: 5000, price: 80 };

function buyNPCStock() {
    if (money >= npcStock.price && npcStock.shares > 0) {
        money -= npcStock.price;
        npcStock.shares -= 1;
        stocks[0].shares += 1; // default stock for simplicity
        updateDisplay();
        renderStocks();
    }
}

// NPC random stock buying
setInterval(() => {
    let chance = Math.random();
    if (chance < 0.05 && stocks.length > 0) { // 5% chance to buy
        let stock = stocks[Math.floor(Math.random() * stocks.length)];
        if (npcStock.shares > 0) {
            stock.shares += 1;
            npcStock.shares -= 1;
        }
    }
}, 2000);
