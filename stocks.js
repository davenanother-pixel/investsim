// Stocks system
let money = 5000;
let stocks = [];
let nextStockId = 1;

// Initialize default stocks
function initStocks() {
    for (let i = 0; i < 5; i++) {
        stocks.push({
            id: nextStockId++,
            name: "STK" + (i + 1),
            price: Math.floor(Math.random() * 200 + 50),
            owned: 0,
            npcOwned: Math.floor(Math.random() * 50 + 10),
            priceHistory: []
        });
    }
}
initStocks();

// Format numbers with commas
function fmt(num) {
    return num.toLocaleString("en-US");
}

// Update stock display
function updateStocksDisplay() {
    const yourDiv = document.getElementById("yourStocks");
    const npcDiv = document.getElementById("npcStocks");

    yourDiv.innerHTML = "";
    npcDiv.innerHTML = "";

    stocks.forEach(s => {
        yourDiv.innerHTML += `Stock: ${s.name} | Shares: ${fmt(s.owned)} | Price: $${fmt(s.price)}<br>`;
        npcDiv.innerHTML += `Stock: ${s.name} | NPC Shares: ${fmt(s.npcOwned)} | Price: $${fmt(s.price)}<br>`;
    });

    document.getElementById("moneyDisplay").innerText = `$${fmt(money)}`;
}

// Create a new stock
function createNewStock() {
    if (money < 25000) return alert("Not enough money!");
    money -= 25000;

    const newStock = {
        id: nextStockId++,
        name: "STK" + nextStockId,
        price: Math.floor(Math.random() * 300 + 200),
        owned: 0,
        npcOwned: Math.floor(Math.random() * 30),
        priceHistory: []
    };
    stocks.push(newStock);
    addChangelogEntry(`New stock created: ${newStock.name}`);
    updateStocksDisplay();
}
