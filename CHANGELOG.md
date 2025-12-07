# Stock Simulator — Game Changelog

All notable gameplay updates and features are listed here.  

## [Unreleased]
- Planned features: advanced NPC AI, multiple stock types, company investments, save/load system

## [0.3.0] - 2025-12-07
### Added
- Separated project into `index.html`, `style.css`, `game.js` for modularity
- Extreme stock price volatility (±25% changes)
- NPC buying system for dynamic market behavior
- Player Buy/Sell system with input for amount
- Money formatting with commas
- Stock creation button ($25,000 per new stock)
- Continuous price fluctuations every 600ms
- UI panels showing player-owned stocks and NPC stocks

### Changed
- Improved readability and layout of stock tables and panels
- Customizable colors via `style.css`

## [0.2.0] - 2025-12-06
### Added
- Initial stock system: player shares, NPC shares
- Basic buy/sell buttons for player interaction
- Price fluctuation logic (random ±10 units per second)

## [0.1.0] - 2025-12-05
### Added
- Base project setup for stock simulator
- Starting money for player: $5,000
- Hardcoded initial NPC stocks
- Basic HTML/CSS/JS files created
