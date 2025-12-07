let companies = [];

function createCompany() {
    if (money >= 100000) {
        money -= 100000;
        companies.push({ name: `Company #${companies.length + 1}`, value: 100000 });
        renderCompanies();
    } else {
        alert("Not enough money for a company!");
    }
}

function renderCompanies() {
    const div = document.getElementById("yourCompanies");
    div.innerHTML = "";
    companies.forEach(company => {
        div.innerHTML += `${company.name} | $${company.value}<br>`;
    });
}

setInterval(renderCompanies, 500);
