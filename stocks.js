let stocks = [
    { name: "TechCorp", price: 100, shares: 0, npcShares: 1000 },
    { name: "MegaIndustries", price: 250, shares: 0, npcShares: 500 },
    { name: "EcoEnergy", price: 75, shares: 0, npcShares: 800 }
];

let money = 5000;

// ----- PLAYER STOCK PANEL -----
function renderPlayerStocks() {
    const yourDiv = document.getElementById("yourStocks");
    yourDiv.innerHTML = "";
    
    stocks.forEach((stock, i) => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${stock.name}</strong> - $<span id="playerPrice-${i}">${stock.price}</span> | Shares: <span id="playerShares-${i}">${stock.shares}</span><br>`;

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
    });
}

// ----- BUY & SELL -----
function buyStock(index) {
    const stock = stocks[index];
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares += 1;
        document.getElementById(`playerShares-${index}`).textContent = stock.shares;
        updateMoneyDisplay();
    } else {
        alert("Not enough money to buy this stock!");
    }
}

function sellStock(index) {
    const stock = stocks[index];
    const input = document.getElementById(`sellInput-${index}`);
    const amount = parseInt(input.value);
    if (!amount || amount <= 0) return;

    if (stock.shares >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
        input.value = "";
        document.getElementById(`playerShares-${index}`).textContent = stock.shares;
        updateMoneyDisplay();
    } else {
        alert("Not enough shares to sell!");
    }
}

// ----- NPC STOCK PANEL -----
function renderNPCStocks() {
    const npcDiv = document.getElementById("npcStocks");
    npcDiv.innerHTML = "";
    stocks.forEach(stock => {
        npcDiv.innerHTML += `${stock.name} | NPC Shares: ${stock.npcShares} | Price: $${stock.price}<br>`;
    });
}

// ----- MONEY DISPLAY -----
function updateMoneyDisplay() {
    document.getElementById("moneyDisplay").textContent = `$${money.toLocaleString("en-US")}`;
}

// ----- CHEAT SYSTEM -----
function enterCheat() {
    const input = document.getElementById("cheatInput");
    const code = input.value.toLowerCase();

    if (code === "inf") {
        money = Number.MAX_SAFE_INTEGER;
        alert("Infinite money activated!");
        updateMoneyDisplay();
    } else {
        alert("Invalid cheat code!");
    }

    input.value = "";
}

// ----- MARKET UPDATE -----
function updateMarket() {
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

        // NPC shares random adjustment
        let npcChange = Math.floor(Math.random() * 6); // 0-5 shares
        if (Math.random() < 0.5 && stock.npcShares >= npcChange) {
            stock.npcShares -= npcChange;
        } else {
            stock.npcShares += npcChange;
        }

        // Update displayed player prices
        document.getElementById(`playerPrice-${stocks.indexOf(stock)}`).textContent = stock.price;
    });

    renderNPCStocks();
}

// ----- INITIAL SETUP -----
renderPlayerStocks();
renderNPCStocks();
updateMoneyDisplay();
setInterval(updateMarket, 500);
