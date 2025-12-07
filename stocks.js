let stocks = [
    { name: "Default Stock", price: 100, shares: 0, npcShares: 100 }
];

function createStock(name, price) {
    if (!name || isNaN(price)) return;
    if (money >= 25000) {
        money -= 25000;
        stocks.push({ name, price, shares: 0, npcShares: 100 });
    } else {
        alert("Not enough money!");
    }
}

function buyStock(stock) {
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares = (stock.shares || 0) + 1;
    }
}

function sellStock(stock, amount) {
    if (!amount || amount <= 0) return;
    if ((stock.shares || 0) >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
    } else {
        alert("Not enough shares!");
    }
}

// Render stocks
function renderStocks() {
    const yourDiv = document.getElementById("yourStocks");
    const npcDiv = document.getElementById("npcStocks");
    yourDiv.innerHTML = "";
    npcDiv.innerHTML = "";

    stocks.forEach(stock => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${stock.name}</strong> - $${stock.price} | Shares: ${stock.shares || 0}<br>`;

        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Buy";
        buyBtn.onclick = () => buyStock(stock);

        const sellInput = document.createElement("input");
        sellInput.type = "number";
        sellInput.placeholder = "Amount to sell";

        const sellBtn = document.createElement("button");
        sellBtn.textContent = "Sell";
        sellBtn.onclick = () => {
            const amount = parseInt(sellInput.value);
            sellStock(stock, amount);
            sellInput.value = "";
        };

        div.appendChild(buyBtn);
        div.appendChild(document.createElement("br"));
        div.appendChild(sellInput);
        div.appendChild(sellBtn);

        yourDiv.appendChild(div);

        // NPC stock
        npcDiv.innerHTML += `${stock.name} | NPC Shares: ${stock.npcShares} | Price: $${stock.price}<br>`;
    });
}

setInterval(renderStocks, 500);
