// NPC AI system
function npcActions() {
    stocks.forEach(s => {
        // Random buy
        if (Math.random() < 0.4) {
            let buyAmt = Math.floor(Math.random() * 5 + 1);
            s.npcOwned += buyAmt;
            s.price *= 1.02;
        }
    });
}

// Buy NPC stock (player action)
function buyNPCStock() {
    let s = stocks[Math.floor(Math.random() * stocks.length)];
    if (money < s.price || s.npcOwned <= 0) return;

    money -= s.price;
    s.owned++;
    s.npcOwned--;
    updateStocksDisplay();
}

// Sell owned stock
function sellOwnedStock() {
    let amount = parseInt(document.getElementById("sellAmount").value);
    if (isNaN(amount) || amount <= 0) return;

    let s = stocks[Math.floor(Math.random() * stocks.length)];
    if (amount > s.owned) return alert("Not enough shares to sell!");

    s.owned -= amount;
    money += amount * s.price;
    updateStocksDisplay();
}

// Stock price fluctuation
function fluctuateStocks() {
    stocks.forEach(s => {
        let change = (Math.random() - 0.5) * 0.5; // ±25%
        s.price = Math.max(1, s.price * (1 + change));
        s.priceHistory.push(s.price);
        if (s.priceHistory.length > 50) s.priceHistory.shift(); // Limit history
    });
}

// Continuous update
setInterval(() => {
    fluctuateStocks();
    npcActions();
    updateStocksDisplay();
    renderGraphs();
}, 600);
