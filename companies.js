let companies = [];
let nextCompanyId = 1;

function startCompany() {
    let cost = 100000;
    if (money < cost) return alert("Not enough money to start a company!");

    money -= cost;
    const company = { id: nextCompanyId++, name: "Company" + nextCompanyId, revenue: 0 };
    companies.push(company);
    addChangelogEntry(`Started company: ${company.name}`);
    updateCompaniesDisplay();
    updateStocksDisplay();
}

// Company revenue increases over time
function updateCompanyRevenue() {
    companies.forEach(c => {
        let rev = Math.floor(Math.random() * 5000);
        c.revenue += rev;
        money += rev;
    });
    updateStocksDisplay();
}

function updateCompaniesDisplay() {
    const container = document.getElementById("companyList");
    container.innerHTML = companies.length ? companies.map(c => `${c.name} | Revenue: $${fmt(c.revenue)}`).join("<br>") : "No companies owned";
}

setInterval(updateCompanyRevenue, 3000);
