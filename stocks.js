let stocks = [
    { name: "Default Stock", price: 100, shares: 0 }
];

function createCustomStock(name, price) {
    if (money >= 25000) {
        money -= 25000;
        let newStock = {
            name: name || "Unnamed Stock",
            price: price || Math.floor(Math.random() * 300 + 200),
            shares: 0
        };
        stocks.push(newStock);
        updateDisplay();
        renderStocks();
        alert(`Created stock: ${newStock.name} at $${newStock.price}`);
    } else alert("Not enough money to create a stock!");
}

function buyStock(stock) {
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares = (stock.shares || 0) + 1;
        updateDisplay();
        renderStocks();
    } else alert("Not enough money!");
}

function sellStock(stock, amount) {
    if (isNaN(amount) || amount <= 0) return;
    if (stock.shares >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
        updateDisplay();
        renderStocks();
    } else alert("Not enough shares!");
}

function renderStocks() {
    const container = document.getElementById("yourStocks");
    container.innerHTML = "";
    stocks.forEach((stock, i) => {
        container.innerHTML += `
        <div>${stock.name} - $${stock.price} | Shares: ${stock.shares} 
        <button onclick="buyStock(stocks[${i}])">Buy</button></div>`;
    });
}

// Automatic stock fluctuation
setInterval(() => {
    stocks.forEach(stock => {
        let change = (Math.random() - 0.5) * 5; // ±2.5%
        stock.price = Math.max(1, Math.floor(stock.price * (1 + change/100)));
    });
    renderStocks();
}, 1000);
