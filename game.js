let money = 5000;
let stocks = [];
let nextId = 1;

// Format numbers like 1,234,567.89
function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// Initial NPC stocks
function initNPC() {
  for (let i = 0; i < 3; i++) {
    stocks.push({
      id: nextId++,
      name: "NPC" + Math.floor(Math.random() * 999),
      price: Math.random() * 200 + 50,
      owned: 0,
      npcOwned: Math.floor(Math.random() * 50 + 10)
    });
  }
}
initNPC();

function updateDisplay() {
  document.getElementById("money").innerText = fmt(money);

  const table = document.getElementById("stockTable");
  table.innerHTML = `
    <tr>
      <th>Stock</th>
      <th>Price</th>
      <th>You Own</th>
      <th>NPC Own</th>
      <th>Actions</th>
    </tr>
  `;

  stocks.forEach(stock => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${stock.name}</td>
      <td>$${fmt(stock.price)}</td>
      <td>${fmt(stock.owned)}</td>
      <td>${fmt(stock.npcOwned)}</td>
      <td>
        <button onclick="buyStock(${stock.id})">Buy</button>
        <button onclick="sellStock(${stock.id})">Sell</button>
      </td>
    `;

    table.appendChild(row);
  });
}

function makeStock() {
  if (money < 50000) return alert("Not enough money!");

  money -= 50000;

  stocks.push({
    id: nextId++,
    name: "STK" + Math.floor(Math.random() * 999),
    price: Math.random() * 500 + 100,
    owned: 0,
    npcOwned: Math.floor(Math.random() * 30)
  });

  updateDisplay();
}

function buyStock(id) {
  let s = stocks.find(a => a.id === id);
  if (!s) return;

  if (money >= s.price) {
    money -= s.price;
    s.owned++;
  } else {
    alert("Not enough money!");
  }

  updateDisplay();
}

function sellStock(id) {
  let s = stocks.find(a => a.id === id);
  if (!s) return;

  let totalAvailable = s.owned + s.npcOwned;
  if (totalAvailable <= 0) return alert("No shares available!");

  let amount = prompt(
    `How many shares to sell?\nYou: ${s.owned}\nNPC: ${s.npcOwned}`
  );

  amount = parseInt(amount);
  if (isNaN(amount) || amount <= 0) return;

  if (amount > totalAvailable) return alert("Not enough shares!");

  // Sell player's shares first
  let fromPlayer = Math.min(s.owned, amount);
  s.owned -= fromPlayer;

  let leftover = amount - fromPlayer;
  if (leftover > 0) s.npcOwned -= leftover;

  money += s.price * amount;

  updateDisplay();
}

// Extreme market movement + NPC buying
setInterval(() => {
  stocks.forEach(s => {
    // ±25% volatility
    let change = (Math.random() - 0.5) * 0.50;
    s.price = Math.max(1, s.price * (1 + change));
  });

  // NPCs buying
  stocks.forEach(s => {
    if (Math.random() < 0.5) {
      let amt = Math.floor(Math.random() * 5 + 1);
      s.npcOwned += amt;
      s.price *= 1.05;
    }
  });

  updateDisplay();
}, 600);

updateDisplay();
