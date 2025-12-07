let money = 5000;

let yourStock = {
    shares: 0,
    price: 100
};

let npcStock = {
    shares: 5000,
    price: 80
};

function format(num) {
    return num.toLocaleString("en-US");
}

function updateDisplay() {
    document.getElementById("moneyDisplay").innerHTML = `$${format(money)}`;

    document.getElementById("yourStocks").innerHTML =
        `Shares: ${format(yourStock.shares)}<br>Price: $${format(yourStock.price)}`;

    document.getElementById("npcStocks").innerHTML =
        `NPC Shares: ${format(npcStock.shares)}<br>Price: $${format(npcStock.price)}`;
}

function buyNPCStock() {
    if (money >= npcStock.price) {
        money -= npcStock.price;
        npcStock.shares -= 1;
        yourStock.shares += 1;
        updateDisplay();
    }
}

function sellOwnedStock() {
    let amount = parseInt(document.getElementById("sellAmount").value);

    if (isNaN(amount) || amount <= 0) return;

    if (yourStock.shares >= amount) {
        yourStock.shares -= amount;
        money += yourStock.price * amount;
        updateDisplay();
    }
}

function createNewStock() {
    if (money >= 25000) {
        money -= 25000;
        yourStock.price += Math.floor(Math.random() * 300 + 200);
        updateDisplay();
    }
}

function fluctuatePrices() {
    let change1 = Math.floor(Math.random() * 21) - 10;
    let change2 = Math.floor(Math.random() * 21) - 10;

    yourStock.price = Math.max(1, yourStock.price + change1 * 2);
    npcStock.price = Math.max(1, npcStock.price + change2 * 2);

    updateDisplay();
}

setInterval(fluctuatePrices, 1000);
updateDisplay();
