let money = 5000;

function updateMoneyDisplay() {
    document.getElementById("moneyDisplay").textContent = `$${money.toLocaleString("en-US")}`;
}

setInterval(updateMoneyDisplay, 500);
