// All stocks
let stocks = [
    { name: "Default Stock", price: 100, shares: 0, npcShares: 0, history: [100] }
];

// All companies
let companies = [];

// Buy stock
function buyStock(stock) {
    if (money >= stock.price) {
        money -= stock.price;
        stock.shares = (stock.shares || 0) + 1;
    }
}

// Sell stock
function sellStock(stock, amount) {
    if (!amount || amount <= 0) return;
    if ((stock.shares || 0) >= amount) {
        stock.shares -= amount;
        money += stock.price * amount;
    }
}

// Create new stock
function createCustomStock(name, price) {
    if (!name || isNaN(price) || price <= 0) return;
    if (money >= 25000) {
        money -= 25000;
        stocks.push({ name, price, shares: 0, npcShares: 0, history: [price] });
    } else {
        alert("Not enough money to create a stock!");
    }
}

// Create company
function createCompany(name, value) {
    if (!name || isNaN(value) || value <= 0) return;
    if (money >= value) {
        money -= value;
        companies.push({ name, value });
    } else {
        alert("Not enough money to create a company!");
    }
}

// --- Render all stocks and companies ---
function renderAll() {
    const yourDiv = document.getElementById("yourStocks");
    const npcDiv = document.getElementById("npcStocks");
    const companyDiv = document.getElementById("yourCompanies");

    if (!yourDiv || !npcDiv || !companyDiv) return;

    // Player stocks
    yourDiv.innerHTML = "";
    stocks.forEach((stock, i) => {
        const div = document.createElement("div");
        div.innerHTML = `
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

        div.appendChild(document.createElement("br"));
        div.appendChild(buyBtn);
        div.appendChild(document.createElement("br"));
        div.appendChild(sellInput);
        div.appendChild(sellBtn);

        yourDiv.appendChild(div);
    });

    // NPC stocks
    npcDiv.innerHTML = "";
    stocks.forEach(stock => {
        npcDiv.innerHTML += `${stock.name} | NPC shares: ${stock.npcShares || 0} | Price: $${stock.price}<br>`;
    });

    // Companies
    companyDiv.innerHTML = "";
    companies.forEach(company => {
        companyDiv.innerHTML += `${company.name} | Value: $${company.value}<br>`;
    });
}

// Run render loop
setInterval(renderAll, 500);
