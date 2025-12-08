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

        // NPC stock display
        npcDiv.innerHTML += `${stock.name} | NPC Shares: ${stock.npcShares} | Price: $${stock.price}<br>`;
    });
}

// PURE GROWTH MARKET
setInterval(() => {
    stocks.forEach(stock => {
        // Only positive growth per tick: +0.5% to +5%
        let growthPercent = Math.random() * 0.045 + 0.005; // 0.5% to 5%
        stock.price = Math.floor(stock.price * (1 + growthPercent));

        // NPC shares random adjustment
        let action = Math.random();
        let npcChange = Math.floor(Math.random() * 11); // 0-10 shares
        if (action < 0.5) {
            stock.npcShares -= npcChange;
        } else {
            stock.npcShares += npcChange;
        }
    });

    renderStocks();
}, 500); // update every 0.5 seconds

// Initial render
renderStocks();
