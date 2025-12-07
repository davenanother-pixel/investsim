let companies = [
    { name: "Tech Corp", value: 50000 },
    { name: "Auto Inc", value: 75000 },
    { name: "Foodies", value: 30000 }
];

function investInCompany(index) {
    if (money >= companies[index].value) {
        money -= companies[index].value;
        alert(`Invested in: ${companies[index].name}`);
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}
