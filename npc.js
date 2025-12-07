setInterval(() => {
    stocks.forEach(stock => {
        let change = (Math.random() - 0.5) * 5;
        stock.price = Math.max(1, Math.floor(stock.price + change));

        let action = Math.random();
        if (action < 0.05 && stock.npcShares > 0) {
            stock.npcShares -= 1;
        } else if (action < 0.1) {
            stock.npcShares += 1;
        }
    });
}, 1500);
