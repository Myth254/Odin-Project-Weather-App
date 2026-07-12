# Odin-Project-Weather-App
# 🌤️ Weather App

A modern, responsive weather application built with vanilla JavaScript that displays real-time weather information for any city worldwide using the WeatherAPI service.

![Weather App Screenshot](image.png)

## ✨ Features

- **Real-time Weather Data**: Fetches current weather conditions from WeatherAPI
- **City Search**: Search for weather information in any city globally
- **Comprehensive Weather Information**:
  - 📍 Location (City & Country)
  - 🕐 Last update time with timezone
  - 🌡️ Temperature in Celsius
  - 💨 Wind speed in mph
  - 💧 Humidity percentage
  - ☁️ Weather condition description
  - 🖼️ Weather condition icon
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean gradient design with smooth animations
- **Error Handling**: User-friendly error messages for invalid cities or network issues

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and gradients
- **JavaScript (ES6+)** - Async/await, DOM manipulation
- **Webpack** - Module bundling and development server
- **WeatherAPI** - Third-party weather data API

## 📁 Project Structure
odin-project-weather-app/
├── src/
│ ├── index.js # Main application logic
│ ├── style.css # Stylesheet
│ ├── template.html # HTML template
│ ├── domHelper.js # DOM utility functions
│ └── config.js # API configuration (ignored in .gitignore)
├── dist/ # Built files (generated)
├── webpack.config.js # Webpack configuration
├── package.json # Dependencies and scripts
├── .gitignore # Git ignore file
└── README.md # Project documentation

text

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- WeatherAPI key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Myth254/Odin-Project-Weather-App.git
   cd Odin-Project-Weather-App
Install dependencies

bash
npm install
Configure API key

Copy config.example.js to config.js

Replace YOUR_API_KEY_HERE with your actual WeatherAPI key:

javascript
export const API_CONFIG = {
    BASE_URL: 'https://api.weatherapi.com/v1/current.json?key=',
    KEY: 'your_api_key_here'
};
Get your free API key from WeatherAPI.com

Start the development server

bash
npm run dev
Build for production

bash
npm run build
📦 Scripts
Script	Description
npm run dev	Starts Webpack development server with hot reload
npm run build	Builds the project for production
npm run deploy	Deploys to GitHub Pages (requires build first)
🎨 UI Features
Gradient Background: Purple-blue gradient for visual appeal

Glass-morphism Effect: Semi-transparent container with blur

Animated Elements:

Weather icon pulse animation

Slide-in animation for weather updates

Interactive Elements:

Input focus states with glow effect

Button hover with elevation and shadow

Smooth transitions throughout

🔧 Configuration
API Configuration
The app uses WeatherAPI's current weather endpoint. The configuration is stored in config.js:

javascript
export const API_CONFIG = {
    BASE_URL: 'https://api.weatherapi.com/v1/current.json?key=',
    KEY: 'your_api_key_here'
};
Webpack Configuration
Entry point: src/index.js

Output: dist/main.js

Development server with hot reload

CSS and HTML loaders configured

Asset handling for images