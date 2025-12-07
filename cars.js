let cars = [
    { name: "Compact Car", price: 15000 },
    { name: "Sedan", price: 30000 },
    { name: "Sports Car", price: 100000 }
];

function buyCar(index) {
    if (money >= cars[index].price) {
        money -= cars[index].price;
        alert(`You bought: ${cars[index].name}`);
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}

