let money = 5000;

// Multiple stocks
let stocks = [];
let nextId = 1;

// Initial NPC stocks
function initStocks() {
    for (let i = 0; i < 5; i++) {
        stocks.push({
            id: nextId++,
            name: "STK" + (i+1),
            price: Math.floor(Math.random() * 200 + 50),
            owned: 0,
            npcOwned: Math.floor(Math.random() * 50 + 10)
        });
    }
}
initStocks();

// Format numbers
function fmt(num) {
    return num.toLocaleString("en-US");
}

// Display update
function updateDisplay() {
    document.getElementById("moneyDisplay").innerText = `$${fmt(money)}`;

    const yourDiv = document.getElementById("yourStocks");
    const npcDiv = document.getElementById("npcStocks");

    yourDiv.innerHTML = "";
    npcDiv.innerHTML = "";

    stocks.forEach(s => {
        yourDiv.innerHTML += `Stock: ${s.name} | Shares: ${fmt(s.owned)} | Price: $${fmt(s.price)}<br>`;
        npcDiv.innerHTML += `Stock: ${s.name} | NPC Shares: ${fmt(s.npcOwned)} | Price: $${fmt(s.price)}<br>`;
    });
}

// Create new stock
function createNewStock() {
    if (money < 25000) return alert("Not enough money!");
    money -= 25000;

    const newStock = {
        id: nextId++,
        name: "STK" + nextId,
        price: Math.floor(Math.random() * 300 + 200),
        owned: 0,
        npcOwned: Math.floor(Math.random() * 30)
    };
    stocks.push(newStock);
    addChangelogEntry(`New stock created: ${newStock.name}`);
    updateDisplay();
}

// Buy NPC stock
function buyNPCStock() {
    let s = stocks[Math.floor(Math.random() * stocks.length)];
    if (money < s.price || s.npcOwned <= 0) return;

    money -= s.price;
    s.owned++;
    s.npcOwned--;
    updateDisplay();
}

// Sell owned stock
function sellOwnedStock() {
    let amount = parseInt(document.getElementById("sellAmount").value);
    if (isNaN(amount) || amount <= 0) return;

    let s = stocks[Math.floor(Math.random() * stocks.length)];
    if (amount > s.owned) return alert("Not enough shares to sell!");

    s.owned -= amount;
    money += amount * s.price;
    updateDisplay();
}

// Price fluctuation + NPC behavior
setInterval(() => {
    stocks.forEach(s => {
        let change = (Math.random() - 0.5) * 0.5; // ±25%
        s.price = Math.max(1, s.price * (1 + change));

        // NPC randomly buys more shares
        if (Math.random() < 0.4) {
            let buyAmt = Math.floor(Math.random() * 5 + 1);
            s.npcOwned += buyAmt;
            s.price *= 1.02;
        }
    });
    updateDisplay();
}, 600);

updateDisplay();
