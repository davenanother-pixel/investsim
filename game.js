let money = 5000;

function format(num) {
    return num.toLocaleString("en-US");
}

function updateMoneyDisplay() {
    document.getElementById("moneyDisplay").textContent = `$${format(money)}`;
}

// Update money display every 500ms
setInterval(updateMoneyDisplay, 500);
