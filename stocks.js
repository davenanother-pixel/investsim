let yourStock = { shares: 0, price: 100 };
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
        alert(`Created new stock: ${newStock.name} at $${newStock.price}`);
        updateDisplay();
        renderStocks();
    } else {
        alert("Not enough money to create a stock!");
    }
}

function buyStock(stock) {
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares = (stock.shares || 0) + 1;
        updateDisplay();
        renderStocks();
    } else {
        alert("Not enough money!");
    }
}

function sellOwnedStock() {
    let amount = parseInt(document.getElementById("sellAmount").value);
    if (isNaN(amount) || amount <= 0) return;
    if (yourStock.shares >= amount) {
        yourStock.shares -= amount;
        money += yourStock.price * amount;
        updateDisplay();
        renderStocks();
    } else {
        alert("Not enough shares!");
    }
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
setInterval(renderStocks, 1000);
