let stocks = [
    { name: "TechCorp", price: 100, shares: 0, npcShares: 1000 },
    { name: "MegaIndustries", price: 250, shares: 0, npcShares: 500 },
    { name: "EcoEnergy", price: 75, shares: 0, npcShares: 800 }
];

// Create a new stock
function createStock(name, price) {
    if (!name || isNaN(price)) return;
    if (money >= 25000) {
        money -= 25000;
        stocks.push({ name, price, shares: 0, npcShares: 500 });
        renderStocks();
    } else {
        alert("Not enough money to create a stock!");
    }
}

// Buy stock
function buyStock(index) {
    const stock = stocks[index];
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares += 1;
        renderStocks();
    } else {
        alert("Not enough money to buy this stock!");
    }
}

// Sell stock
function sellStock(index) {
    const stock = stocks[index];
    const input = document.getElementById(`sellInput-${index}`);
    const amount = parseInt(input.value);
    if (!amount || amount <= 0) return;

    if (stock.shares >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
        input.value = "";
        renderStocks();
    } else {
        alert("Not enough shares to sell!");
    }
}

// Render all stocks
function renderStocks() {
    const yourDiv = document.getElementById("yourStocks");
    const npcDiv = document.getElementById("npcStocks");
    yourDiv.innerHTML = "";
    npcDiv.innerHTML = "";

    stocks.forEach((stock, i) => {
        // Player stock
        const div = document.createElement("div");
        div.innerHTML = `<strong>${stock.name}</strong> - $${stock.price} | Shares: ${stock.shares}<br>`;

        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Buy";
        buyBtn.onclick = () => buyStock(i);

        const sellInput = document.createElement("input");
        sellInput.type = "number";
        sellInput.placeholder = "Amount to sell";
        sellInput.id = `sellInput-${i}`;

        const sellBtn = document.createElement("button");
        sellBtn.textContent = "Sell";
        sellBtn.onclick = () => sellStock(i);

        div.appendChild(buyBtn);
        div.appendChild(document.createElement("br"));
        div.appendChild(sellInput);
        div.appendChild(sellBtn);

        yourDiv.appendChild(div);

        // NPC stock
        npcDiv.innerHTML += `${stock.name} | NPC Shares: ${stock.npcShares} | Price: $${stock.price}<br>`;
    });
}

// Aggressive market update: faster and larger swings
setInterval(() => {
    stocks.forEach(stock => {
        // Random fluctuation -15% to +15%
        let changePercent = (Math.random() - 0.5) * 0.3; // ±15%
        stock.price = Math.max(1, Math.floor(stock.price * (1 + changePercent)));

        // Strong growth factor +0.5%
        stock.price = Math.floor(stock.price * 1.005);

        // NPC shares random adjustment more often
        let action = Math.random();
        if (action < 0.1 && stock.npcShares > 0) {
            stock.npcShares -= Math.floor(Math.random() * 5); // NPC sells 0-4 shares
        } else if (action < 0.2) {
            stock.npcShares += Math.floor(Math.random() * 5); // NPC buys 0-4 shares
        }
    });

    renderStocks();
}, 500); // update every 0.5 seconds for faster action

// Initial render
renderStocks();
