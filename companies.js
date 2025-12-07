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
        renderCompanies();
    } else {
        alert("Not enough money!");
    }
}

function createCustomCompany(name, value) {
    if (!name || !value) return alert("Name and value required!");
    companies.push({ name, value });
    alert(`Created company: ${name} valued at $${value}`);
    renderCompanies();
}

function renderCompanies() {
    const container = document.getElementById("companiesList");
    container.innerHTML = "";
    companies.forEach((company, i) => {
        container.innerHTML += `<div>${company.name} - $${company.value}</div>`;
    });
}
setInterval(renderCompanies, 1000);

