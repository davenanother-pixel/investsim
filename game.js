let money = 5000;

function format(num) {
    return num.toLocaleString();
}

function updateMoneyDisplay() {
    document.getElementById("moneyDisplay").textContent = `$${format(money)}`;
}

setInterval(updateMoneyDisplay, 500);
