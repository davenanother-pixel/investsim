function saveGame() {
    const saveData = {
        money,
        stocks,
        ownedHomes,
        ownedCars,
        companies
    };
    localStorage.setItem("stockSimSave", JSON.stringify(saveData));
    alert("Game saved!");
}

function loadGame() {
    const data = JSON.parse(localStorage.getItem("stockSimSave"));
    if (!data) return alert("No save data found!");

    money = data.money;
    stocks = data.stocks;
    ownedHomes = data.ownedHomes;
    ownedCars = data.ownedCars;
    companies = data.companies;

    addChangelogEntry("Game loaded from save");
    updateStocksDisplay();
    updateHomesDisplay();
    updateCarsDisplay();
    updateCompaniesDisplay();
    renderGraphs();
}
