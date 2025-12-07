// Create a canvas for stock graphs
let canvas = document.createElement("canvas");
canvas.id = "stockGraph";
canvas.width = 600;
canvas.height = 300;
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");

// Draw all stock histories
function drawGraphs() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stocks.forEach((stock, idx) => {
        if (!stock.history) return;

        ctx.beginPath();
        ctx.strokeStyle = idx === 0 ? "#00ff4c" : "#ff4c00"; // default vs others
        ctx.lineWidth = 2;

        stock.history.forEach((price, i) => {
            let x = (i / (stock.history.length - 1)) * canvas.width;
            let maxPrice = Math.max(...stock.history) * 1.2;
            let y = canvas.height - (price / maxPrice) * canvas.height;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.stroke();

        // Label last price
        ctx.fillStyle = ctx.strokeStyle;
        ctx.font = "12px Arial";
        let lastPrice = stock.history[stock.history.length - 1];
        ctx.fillText(`${stock.name}: $${lastPrice}`, canvas.width - 120, 20 + idx * 15);
    });
}

// Redraw every second
setInterval(drawGraphs, 1000);
