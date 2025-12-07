function saveGame() {
    const saveData = {
        money,
        yourStock,
        stocks,
        npcStock,
        homes,
        cars,
        companies
    };
    localStorage.setItem("stockSimulatorSave", JSON.stringify(saveData));
    alert("Game saved!");
}

function loadGame() {
    const data = JSON.parse(localStorage.getItem("stockSimulatorSave"));
    if (data) {
        money = data.money;
        yourStock = data.yourStock;
        stocks = data.stocks;
        npcStock = data.npcStock;
        homes = data.homes;
        cars = data.cars;
        companies = data.companies;
        updateDisplay();
        renderStocks();
        renderHomes();
        renderCars();
        renderCompanies();
        alert("Game loaded!");
    } else {
        alert("No save found.");
    }
}
