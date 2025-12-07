const changelogEntries = [
    "[0.4.0] - 2025-12-07: Added full remodel, homes, cars, companies, save/load, graphs, advanced NPC AI.",
    "[0.3.0] - 2025-12-07: Stock volatility, NPC buying, create new stock, in-game changelog panel.",
    "[0.2.0] - 2025-12-06: Initial stock system, NPC shares, buy/sell buttons, price fluctuation.",
    "[0.1.0] - 2025-12-05: Base project setup, starting money $5,000, hardcoded NPC stocks."
];

function addChangelogEntry(entry) {
    changelogEntries.unshift(`[${new Date().toLocaleDateString()}] ${entry}`);
    renderChangelog();
}

function renderChangelog() {
    const container = document.getElementById("inGameChangelog");
    container.innerHTML = changelogEntries.map(e => `<p>${e}</p>`).join("");
}

renderChangelog();
