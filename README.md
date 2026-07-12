# Odin-Project-Weather-App
# 🌤️ Weather App

A modern, responsive weather application built with vanilla JavaScript that displays real-time weather information for any city worldwide using the WeatherAPI service.

![the UI](image.png)

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