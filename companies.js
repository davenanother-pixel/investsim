let companies = [];

function createCompany() {
    const input = document.getElementById("companyName");
    const name = input.value.trim();
    if (!name) return;

    if (money >= 25000) {
        money -= 25000;
        companies.push({ name, stockPrice: Math.floor(Math.random()*300+200), shares: 0 });
        alert(`Company "${name}" created!`);
        input.value = "";
        updateMoneyDisplay();
    } else {
        alert("Not enough money to create a company!");
    }
}
