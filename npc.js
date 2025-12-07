let npcMoney = 100000;

// NPC automatic buying/selling
setInterval(() => {
    if (stocks.length === 0) return;
    const stock = stocks[Math.floor(Math.random() * stocks.length)];
    const action = Math.random();

    if (action < 0.05 && npcMoney >= stock.price) {
        stock.npcShares = (stock.npcShares || 0) + 1;
        npcMoney -= stock.price;
    } else if (action < 0.1 && (stock.npcShares || 0) > 0) {
        stock.npcShares -= 1;
        npcMoney += stock.price;
    }
}, 2000);

// --- Stock price fluctuation ---
setInterval(() => {
    stocks.forEach(stock => {
        let change = (Math.random() - 0.5) * 5; // small fluctuation
        stock.price = Math.max(1, Math.floor(stock.price + change));
        stock.history.push(stock.price);
    });
}, 1500);
