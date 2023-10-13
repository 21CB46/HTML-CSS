const apiKey = 'YOUR API KEY';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location === '') {
        alert('Please enter a location.');
        return;
    }

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: location },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    axios
        .request(options)
        .then(response => {
            const temperature = response.data.current.temp_c; 
            const weatherDescription = response.data.current.condition.text;
            const cityName = response.data.location.name;

            const weatherHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred. Please try again later.');
        });
});