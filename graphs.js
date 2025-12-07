let stockChart;
function renderGraphs() {
    const ctx = document.getElementById("stockGraph").getContext("2d");
    if (stockChart) stockChart.destroy();

    stockChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Array.from({length:50}, (_,i)=>i+1),
            datasets: stocks.map(s => ({
                label: s.name,
                data: s.priceHistory,
                borderColor: `hsl(${Math.random()*360},70%,50%)`,
                fill: false
            }))
        },
        options: {
            responsive: false,
            animation: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
