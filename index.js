const apiKey = '863ba2dba5d1fcf1aeb78bffe4b9bac2';

     
        async function fetchWeather(city) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                // Check if request was successful
                if (response.ok) {
                    displayWeather(data);
                } else {
                    // Display error message if request fails
                    console.error('Failed to fetch weather:', data.message);
                    document.getElementById('weather').textContent = 'Failed to fetch weather data';
                }
            } catch (error) {
                console.error('Error fetching weather:', error);
                document.getElementById('weather').textContent = 'An error occurred while fetching weather data';
            }
        }

        // Function to display weather data
        function displayWeather(data) {
            const weatherInfo = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}</p>
                <p>Wind: ${data.wind.speed} km/h</p>
                <p>Precipitation: ${data.weather[0].main === 'Rain' ? 'Rain' : 'No rain'}</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather').innerHTML = weatherInfo;
        }

        // Function to search weather by city name
        function searchWeather() {
            const cityInput = document.getElementById('cityInput').value;
            fetchWeather(cityInput);
        }

        // Fetch weather data for a default city when the page loads
        // window.onload = function() {
        //     fetchWeather('Guwahati'); // Default city
        // };
