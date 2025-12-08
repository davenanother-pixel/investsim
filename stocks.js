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
        input.value = ""; // clear input after selling
        renderStocks();
    } else {
        alert("Not enough shares to sell!");
    }
}

// Render stocks once and preserve inputs
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

        // Only create input if it doesn't exist
        let sellInput = document.getElementById(`sellInput-${i}`);
        if (!sellInput) {
            sellInput = document.createElement("input");
            sellInput.type = "number";
            sellInput.placeholder = "Amount to sell";
            sellInput.id = `sellInput-${i}`;
        }

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

// HIGHLY BULLISH MARKET: 99% growth, 1% small drop
setInterval(() => {
    stocks.forEach(stock => {
        let chance = Math.random();
        if (chance < 0.01) {
            // 1% chance to drop 5-10%
            let drop = Math.random() * 0.05 + 0.05;
            stock.price = Math.max(1, Math.floor(stock.price * (1 - drop)));
        } else {
            // 99% chance to grow 1-5%
            let growth = Math.random() * 0.04 + 0.01;
            stock.price = Math.floor(stock.price * (1 + growth));
        }

        // NPC shares adjustment
        let npcChange = Math.floor(Math.random() * 6); // 0-5 shares
        if (Math.random() < 0.5 && stock.npcShares >= npcChange) {
            stock.npcShares -= npcChange;
        } else {
            stock.npcShares += npcChange;
        }
    });

    // Only update NPC prices; do not rebuild player inputs
    const npcDiv = document.getElementById("npcStocks");
    npcDiv.innerHTML = "";
    stocks.forEach(stock => {
        npcDiv.innerHTML += `${stock.name} | NPC Shares: ${stock.npcShares} | Price: $${stock.price}<br>`;
    });

}, 500); // 0.5s updates

// Initial render
renderStocks();
