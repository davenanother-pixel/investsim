// Array of all stocks
let stocks = [
    { name: "Default Stock", price: 100, shares: 0, npcShares: 0, history: [100] }
];

// Buy stock function
function buyStock(stock) {
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares = (stock.shares || 0) + 1;
    }
}

// Sell stock function
function sellStock(stock, amount) {
    if (!amount || amount <= 0) return;
    if ((stock.shares || 0) >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
    }
}

// Create custom stock
function createCustomStock(name, price) {
    if (!name || isNaN(price) || price <= 0) return;
    if (money >= 25000) {
        money -= 25000;
        stocks.push({ name, price, shares: 0, npcShares: 0, history: [price] });
    } else {
        alert("Not enough money to create a stock!");
    }
}

// --- Render all stocks (player + NPC) ---
function renderAllStocks() {
    const yourDiv = document.getElementById("yourStocks");
    const npcDiv = document.getElementById("npcStocks");
    if (!yourDiv || !npcDiv) return;

    // Player stocks
    yourDiv.innerHTML = "";
    stocks.forEach((stock, i) => {
        const stockDiv = document.createElement("div");
        stockDiv.className = "stock-item";

        stockDiv.innerHTML = `
            <strong>${stock.name}</strong> - $${stock.price} | Shares: ${stock.shares || 0}
        `;

        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Buy";
        buyBtn.onclick = () => buyStock(stock);

        const sellInput = document.createElement("input");
        sellInput.type = "number";
        sellInput.placeholder = "Amount to sell";
        sellInput.style.marginTop = "5px";

        const sellBtn = document.createElement("button");
        sellBtn.textContent = "Sell";
        sellBtn.onclick = () => {
            const amount = parseInt(sellInput.value);
            sellStock(stock, amount);
            sellInput.value = "";
        };

        stockDiv.appendChild(document.createElement("br"));
        stockDiv.appendChild(buyBtn);
        stockDiv.appendChild(document.createElement("br"));
        stockDiv.appendChild(sellInput);
        stockDiv.appendChild(sellBtn);

        yourDiv.appendChild(stockDiv);
    });

    // NPC stocks
    npcDiv.innerHTML = "";
    stocks.forEach(stock => {
        npcDiv.innerHTML += `${stock.name} | NPC shares: ${stock.npcShares || 0} | Price: $${stock.price}<br>`;
    });
}

// Run render loop
setInterval(renderAllStocks, 500);

