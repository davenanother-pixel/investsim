// Player stocks array
let stocks = [
    { name: "Default Stock", price: 100, shares: 0, history: [100] }
];

// Money variable from game.js
// let money = 5000;

// --- Create a new custom stock ---
function createCustomStock(name, price) {
    if (money < 25000) return alert("Not enough money to create a stock!");
    if (!name || !price) return alert("Name and price required!");

    money -= 25000;

    let newStock = {
        name: name,
        price: price,
        shares: 0,
        history: [price] // initial history for graph
    };

    stocks.push(newStock);
    updateDisplay();
    renderStocks();
    alert(`Created stock: ${name} at $${price}`);
}

// --- Buy a stock ---
function buyStock(stock) {
    if (money < stock.price) return alert("Not enough money!");
    money -= stock.price;
    stock.shares = (stock.shares || 0) + 1;
    updateDisplay();
    renderStocks();
}

// --- Sell a stock ---
function sellStock(stock, amount) {
    if (isNaN(amount) || amount <= 0) return;
    if (stock.shares >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
        updateDisplay();
        renderStocks();
    } else alert("Not enough shares!");
}

// --- Render stocks in the UI ---
function renderStocks() {
    const container = document.getElementById("yourStocks");
    container.innerHTML = "";

    stocks.forEach((stock, i) => {
        container.innerHTML += `
        <div>
            ${stock.name} - $${stock.price} | Shares: ${stock.shares} 
            <button onclick="buyStock(stocks[${i}])">Buy</button>
        </div>`;
    });
}

// --- Automatic stock fluctuation ---
setInterval(() => {
    stocks.forEach(stock => {
        let change = (Math.random() - 0.5) * 5; // ±2.5%
        stock.price = Math.max(1, Math.floor(stock.price * (1 + change / 100)));

        // Update stock history for graphs
        if (!stock.history) stock.history = [];
        stock.history.push(stock.price);
        if (stock.history.length > 50) stock.history.shift();
    });

    renderStocks();
}, 1000);
