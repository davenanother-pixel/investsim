let homes = [
    { name: "Small House", price: 50000 },
    { name: "Apartment", price: 120000 },
    { name: "Villa", price: 500000 }
];

function buyHome(index) {
    if (money >= homes[index].price) {
        money -= homes[index].price;
        alert(`You bought: ${homes[index].name}`);
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}
