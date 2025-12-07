let npcMoney = 100000;

// NPC buys/sells stocks and stock price fluctuates
setInterval(() => {
    if (stocks.length === 0) return;

    // Random stock
    const stock = stocks[Math.floor(Math.random() * stocks.length)];
    const action = Math.random();

    // Buy
    if (action < 0.05 && npcMoney >= stock.price) {
        stock.npcShares = (stock.npcShares || 0) + 1;
        npcMoney -= stock.price;
    }
    // Sell
    else if (action < 0.1 && (stock.npcShares || 0) > 0) {
        stock.npcShares -= 1;
        npcMoney += stock.price;
    }

    // Stock price fluctuation
    const change = (Math.random() - 0.5) * 5;
    stock.price = Math.max(1, Math.floor(stock.price + change));
    stock.history.push(stock.price);
}, 1500);
